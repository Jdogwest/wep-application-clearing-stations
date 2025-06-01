from app.dao.base import BaseDAO
from app.workman_brigadiers.models import WorkmanBrigadier


class WorkmanBrigadierDAO(BaseDAO):
    model = WorkmanBrigadier