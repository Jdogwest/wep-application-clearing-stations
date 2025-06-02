from app.dao.base import BaseDAO
from app.users.models import User


class UserDAO(BaseDAO):
    model = User

    @classmethod
    async def find_one_or_none(cls, **filter_by):
        user = await super().find_one_or_none(**filter_by)
        if user:
            user.__dict__.pop("password", None)
        return user
    
    @classmethod
    async def find_one_or_none_with_pass(cls, **filter_by):
        user = await super().find_one_or_none(**filter_by)
        return user

    @classmethod
    async def find_all(cls, **filter_by):
        users = await super().find_all(**filter_by)
        for user in users:
            user.__dict__.pop("password", None)
        return users