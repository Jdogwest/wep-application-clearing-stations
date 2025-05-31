from app.dao.base import BaseDAO
from app.clients.models import Client


class ClientDAO(BaseDAO):
    model = Client