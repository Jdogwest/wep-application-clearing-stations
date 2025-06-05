from fastapi import APIRouter, Depends
from app.users.dao import UserDAO
from app.users.schemas import SUser, SUserEdit
from app.users.rb import RBUser
from app.users.models import User
from app.users.dependencies import get_current_admin_user, get_current_manager_user, get_current_user


router = APIRouter(prefix='/users', tags=['Работа с пользователями'])


@router.get("/", summary="Получить всех пользователей", response_model=list[SUser])
async def get_all_users(request_body: RBUser = Depends()) -> list[SUser]:
    return await UserDAO.find_all(**request_body.to_dict())


@router.get("/{id}", summary="Получить одного пользователя по id")
async def get_user_by_id(id: int, admin: User = Depends(get_current_manager_user)):
    rez = await UserDAO.getClient(id)
    if rez is None:
        return {'message': f'Пользователь с id {id} не найден!'}
    
    return rez


@router.get("/me/")
async def get_me(user_data: User = Depends(get_current_user)):
    return await UserDAO.getClient(user_data.id)


@router.get("/all_users/")
async def get_all_users(user_data: User = Depends(get_current_admin_user)):
    return await UserDAO.find_all()

@router.get("/all_clients/")
async def get_all_clients(user_data: User = Depends(get_current_admin_user)):
    return await UserDAO.find_all(role="client")


@router.post("/edit-user/")
async def edit_user(user_data: SUserEdit, user: User = Depends(get_current_user)):
    return await UserDAO.edit_client(user.id, user_data.model_dump())
