from pydantic import BaseModel, Field, ConfigDict


class SSeptic(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    address: str = Field(..., min_length=1, max_length=100, description="Адрес септика, от 1 до 100 символов")
    volume: int = Field(..., description="Объем септика в м3")
    model: str = Field(..., min_length=1, max_length=50, description="Модель септика, от 1 до 50 символов")
    owner: int = Field(..., description="ID клиента собственника септика")


class SSepticEdit(BaseModel):
    address: str = Field(..., min_length=1, max_length=100, description="Адрес септика, от 1 до 100 символов")
    volume: int = Field(..., description="Объем септика в м3")
    model: str = Field(..., min_length=1, max_length=50, description="Модель септика, от 1 до 50 символов")