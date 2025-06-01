from fastapi import APIRouter, Depends
from app.workman_brigadiers.dao import WorkmanBrigadierDAO
from app.workman_brigadiers.schemas import SWorkmanBrigadier
from app.workman_brigadiers.rb import RBWorkmanBrigadier


router = APIRouter(prefix='/workman_brigadiers', tags=['Работа с бригадами'])


@router.get("/", summary="Получить всех рабочих и их бригадиров", response_model=list[SWorkmanBrigadier])
async def get_all_workmans(request_body: RBWorkmanBrigadier = Depends()) -> list[SWorkmanBrigadier]:
    return await WorkmanBrigadierDAO.find_all(**request_body.to_dict())
