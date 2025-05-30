from fastapi import APIRouter, Depends
from app.clients.dao import ClientDAO
from app.clients.schemas import SClient
from app.clients.rb import RBClient


router = APIRouter(prefix='/clients', tags=['Работа с клиентами'])


@router.get("/", summary="Получить всех клиентов", response_model=list[SClient])
async def get_all_clients(request_body: RBClient = Depends()) -> list[SClient]:
    return await ClientDAO.find_all(**request_body.to_dict())

@router.get("/{id}", summary="Получить одного клиента по id")
async def get_client_by_id(client_id: int) -> SClient | None:
    rez = await ClientDAO.find_one_or_none_by_id(client_id)
    if rez is None:
        return {'message': f'Клиент с ID {client_id} не найден!'}
    return rez