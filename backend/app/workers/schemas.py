from sqlalchemy.orm import Mapped
from app.database import Base, int_pk
import re
from pydantic import BaseModel, Field, EmailStr, validator, ConfigDict


class Worker(Base):
    id: Mapped[int_pk]
    fio: Mapped[str]
    phone_number: Mapped[str]
    position: Mapped[str]

    def __str__(self):
        return (f"{self.__class__.__name__}(id={self.id}, "
                f"fio={self.fio!r},"
                f"phone_number={self.phone_number!r}),"
                f"position={self.email!r})")

    def __repr__(self):
        return str(self)




class SWorker(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    fio: str = Field(..., min_length=1, max_length=50, description="ФИО клиента, от 1 до 50 символов")
    phone_number: str = Field(..., description="Номер телефона в международном формате, начинающийся с '+'")
    position: str = Field(..., min_length=1, max_length=50, description="Должность сотрудника, от 1 до 50 символов")

    @validator("phone_number")
    def validate_phone_number(cls, value):
        if not re.match(r'^\+\d{1,15}$', value):
            raise ValueError('Номер телефона должен начинаться с "+" и содержать от 1 до 15 цифр')
        return value