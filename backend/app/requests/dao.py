import logging
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.dao.base import BaseDAO
from app.requests.models import Request
from app.requests.schemas import SRequestCreate, SRequestFull
from app.database import async_session_maker
from app.septics.models import Septic
from app.services.models import Service
from app.request_services.models import RequestService
from app.requests.rb import RBRequest


class RequestDAO(BaseDAO):
    model = Request

    @classmethod
    async def add_request(cls, data: SRequestCreate, user_id: int):
        async with async_session_maker() as session:
            result_septic = await session.execute(
                select(Septic).where(Septic.owner_id == user_id)
            )
            septic = result_septic.scalars().first()

            if not septic:
                raise ValueError("У пользователя нет привязанного септика")


            service_ids = [item.service_id for item in data.services]

            result_services = await session.execute(
                select(Service).where(Service.id.in_(service_ids))
            )
            services_db = result_services.scalars().all()

            service_map = {s.id: s.price for s in services_db}

            total_summary = sum(
                service_map[item.service_id] * item.amount
                for item in data.services
                if item.service_id in service_map
            )

            if len(service_map) != len(service_ids):
                raise ValueError("Некоторые услуги не найдены")


            new_request = cls.model(
                client_id=user_id,
                septic_id=septic.id,
                summary=total_summary,
                planed_start_date=data.planed_start_date,
                planed_start_time=data.planed_start_time,
                comment=data.comment
            )

            session.add(new_request)

            for service in data.services:
                new_request.services.append(
                    RequestService(request_id=new_request.id, service_id=service.service_id, amount=service.amount)
                )
            await session.commit()
            await session.refresh(new_request)

            return new_request.to_dict()
        

    @classmethod
    async def find_all_requests(cls):
        async with async_session_maker() as session:
            result = await session.execute(
                select(cls.model)
                .options(
                    selectinload(cls.model.client),
                    selectinload(cls.model.septic),
                    selectinload(cls.model.services).selectinload(RequestService.service)
                )
            )
            requests = result.scalars().all()

            return [req.to_dict() for req in requests]