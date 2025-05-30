from fastapi import APIRouter, Depends
from app.workers.dao import WorkerDAO
from app.workers.schemas import SWorker
from app.workers.rb import RBWorker


router = APIRouter(prefix='/workers', tags=['Работа с сотрудниками'])


@router.get("/", summary="Получить всех сотрудников", response_model=list[SWorker])
async def get_all_workers(request_body: RBWorker = Depends()) -> list[SWorker]:
    return await WorkerDAO.find_all(**request_body.to_dict())

@router.get("/{id}", summary="Получить одного сотрудника по должности")
async def get_worker_by_id(worker_position: str) -> SWorker | None:
    rez = await WorkerDAO.find_one_or_none_by_id(worker_position)
    if rez is None:
        return {'message': f'Сотрудник с должностью {worker_position} не найден!'}
    return rez