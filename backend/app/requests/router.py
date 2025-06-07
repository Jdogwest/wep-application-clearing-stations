from fastapi import APIRouter, Depends
from app.requests.dao import RequestDAO
from app.requests.schemas import SRequestCreate
from app.users.dependencies import get_current_user
from app.users.models import User


router = APIRouter(prefix='/requests', tags=['Работа с запросами'])


@router.post("/add/", summary="создать запрос")
async def add_request(request_data: SRequestCreate, user: User = Depends(get_current_user)):
    return await RequestDAO.add_request(request_data, user.id)