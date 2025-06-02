import re
from pydantic import BaseModel, EmailStr, Field, field_validator, ConfigDict



class SUser(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    fio: str = Field(..., min_length=1, max_length=50, description="ФИО клиента, от 1 до 50 символов")
    phone_number: str = Field(..., description="Номер телефона в международном формате, начинающийся с '+'")
    email: str = Field(..., description="Электронная почта студента")
    role: str = Field(..., min_length=1, max_length=50, description="Должность сотрудника, от 1 до 50 символов")

    @field_validator("phone_number")
    def validate_phone_number(cls, value):
        if not re.match(r'^\+\d{1,15}$', value):
            raise ValueError('Номер телефона должен начинаться с "+" и содержать от 1 до 15 цифр')
        return value
    
    @field_validator("email")
    def validate_email(cls, value):
        if not re.match(r'^\S+@\S+\.\S+$', value):
            raise ValueError('Некорректная электронная почта')
        return value
    

class SUserRegister(BaseModel):
    email: EmailStr = Field(..., description="Электронная почта")
    password: str = Field(..., min_length=5, max_length=50, description="Пароль, от 5 до 50 знаков")
    fio: str = Field(..., min_length=3, max_length=50, description="FIO, от 3 до 50 символов")
    
    @field_validator("email")
    def validate_email(cls, value):
        if not re.match(r'^\S+@\S+\.\S+$', value):
            raise ValueError('Некорректная электронная почта')
        return value
    

class SUserAuth(BaseModel):
    email: EmailStr = Field(..., description="Электронная почта")
    password: str = Field(..., min_length=5, max_length=50, description="Пароль, от 5 до 50 знаков")