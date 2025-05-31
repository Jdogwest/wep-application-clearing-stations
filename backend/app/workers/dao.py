from app.dao.base import BaseDAO
from app.workers.models import Worker


class WorkerDAO(BaseDAO):
    model = Worker