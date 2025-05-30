from app.dao.base import BaseDAO
from app.workers.schemas import Worker


class WorkerDAO(BaseDAO):
    model = Worker