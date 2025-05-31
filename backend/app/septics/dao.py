from app.dao.base import BaseDAO
from app.septics.models import Septic
from app.database import async_session_maker
from sqlalchemy.future import select
from sqlalchemy.orm import joinedload


class SepticDAO(BaseDAO):
    model = Septic

    @classmethod
    async def find_full_data(cls):
        async with async_session_maker() as session:
            query = select(cls.model).options(joinedload(cls.model.owner))
            result = await session.execute(query)

            if not result:
                return None
            
            return result.scalars().all()