from fastapi import APIRouter, Depends
from app.requests.dao import RequestDAO
from app.requests.schemas import SRequest
from app.requests.rb import RBRequest


router = APIRouter(prefix='/requests', tags=['Работа с септиками'])


@router.get("/", summary="Получить все запросы", response_model=list[SRequest])
async def get_all_requests(request_body: RBRequest = Depends()) -> list[SRequest]:
    return await RequestDAO.find_all(**request_body.to_dict())

@router.get("/{id}", summary="Получить один запрос по id")
async def get_request_by_id(request_id: str) -> SRequest | None:
    rez = await RequestDAO.find_one_or_none_by_id(request_id)
    if rez is None:
        return {'message': f'Запрос с id {request_id} не найден!'}
    return rez