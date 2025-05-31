from fastapi import APIRouter, Depends
from app.septics.dao import SepticDAO
from app.septics.schemas import SSeptic
from app.septics.rb import RBSeptic


router = APIRouter(prefix='/septics', tags=['Работа с септиками'])


@router.get("/", summary="Получить всех септиков", response_model=list[SSeptic])
async def get_all_septics(request_body: RBSeptic = Depends()) -> list[SSeptic]:
    return await SepticDAO.find_all(**request_body.to_dict())

@router.get("/{id}", summary="Получить одного сотрудника по должности")
async def get_septic_by_id(septic_position: str) -> SSeptic | None:
    rez = await SepticDAO.find_one_or_none_by_id(septic_position)
    if rez is None:
        return {'message': f'Сотрудник с должностью {septic_position} не найден!'}
    return rez

@router.get("/full_data/{id}")
async def get_septic_full_data():
    return await SepticDAO.find_full_data()