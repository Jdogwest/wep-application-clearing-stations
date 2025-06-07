from sqlalchemy import select
from app.dao.base import BaseDAO
from app.requests.models import Request
from app.requests.schemas import SRequestCreate
from app.database import async_session_maker
from app.septics.models import Septic
from app.services.models import Service


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
            await session.commit()
            await session.refresh(new_request)

            return new_request.to_dict()