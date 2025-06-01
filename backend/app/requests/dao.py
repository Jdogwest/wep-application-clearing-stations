from app.dao.base import BaseDAO
from app.requests.models import Request


class RequestDAO(BaseDAO):
    model = Request