from app.dao.base import BaseDAO
from app.clients.schemas import Client


class ClientDAO(BaseDAO):
    model = Client