import re
from pydantic import BaseModel, Field, EmailStr, field_validator, ConfigDict


class SClient(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    fio: str = Field(..., min_length=1, max_length=50, description="ФИО клиента, от 1 до 50 символов")
    phone_number: str = Field(..., description="Номер телефона в международном формате, начинающийся с '+'")
    email: EmailStr = Field(..., description="Электронная почта студента")

    @field_validator("phone_number")
    def validate_phone_number(cls, value):
        if not re.match(r'^\+\d{1,15}$', value):
            raise ValueError('Номер телефона должен начинаться с "+" и содержать от 1 до 15 цифр')
        return value