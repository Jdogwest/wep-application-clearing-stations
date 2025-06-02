from fastapi import APIRouter, Depends, HTTPException, Response, status
from app.users.dao import UserDAO
from app.users.schemas import SUser, SUserAuth
from app.users.rb import RBUser
from app.users.schemas import SUserRegister
from app.users.models import User
from app.users.auth import authenticate_user, create_access_token, get_password_hash
from app.users.dependencies import get_current_admin_user, get_current_user


router = APIRouter(prefix='/users', tags=['Работа с пользователями'])


@router.get("/", summary="Получить всех пользователей", response_model=list[SUser])
async def get_all_users(request_body: RBUser = Depends()) -> list[SUser]:
    return await UserDAO.find_all(**request_body.to_dict())


@router.get("/{id}", summary="Получить одного пользователя по id")
async def get_user_by_id(user_id: str) -> SUser | None:
    rez = await UserDAO.find_one_or_none_by_id(user_id)
    if rez is None:
        return {'message': f'Пользователь с должностью {user_id} не найден!'}
    return rez


@router.post("/auth/register/")
async def register_user(user_data: SUserRegister) -> dict:
    user = await UserDAO.find_one_or_none(email=user_data.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail='Пользователь уже существует'
        )
    user_dict = user_data.model_dump()
    user_dict['password'] = get_password_hash(user_data.password)
    await UserDAO.add(**user_dict)
    return {'message': 'Вы успешно зарегистрированы!'}


@router.post("/auth/login")
async def auth_user(response: Response, user_data: SUserAuth):
    check = await authenticate_user(email=user_data.email, password=user_data.password)
    if check is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail='Неверная почта или пароль')
    access_token = create_access_token({"sub": str(check.id)})
    response.set_cookie(key="users_access_token", value=access_token, httponly=True, samesite="none", secure=True)
    return {'access_token': access_token, 'refresh_token': None}


@router.get("/me/")
async def get_me(user_data: User = Depends(get_current_user)):
    return user_data


@router.post("/logout/")
async def logout_user(response: Response):
    response.delete_cookie(key="users_access_token")
    return {'message': 'Пользователь успешно вышел из системы'}


@router.get("/all_users/")
async def get_all_users(user_data: User = Depends(get_current_admin_user)):
    return await UserDAO.find_all()