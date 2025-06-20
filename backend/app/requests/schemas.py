from datetime import date, datetime, time
from typing import List, Optional
from pydantic import BaseModel, ConfigDict


class SRequest(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    created_at: datetime
    client_id: int
    contract_number: str | None
    status: str
    summary: int
    septic_id: int
    planed_start_time: time
    planed_start_date: date



class ServiceItem(BaseModel):
    service_id: int
    amount: int


class SRequestCreate(BaseModel):
    planed_start_date: date
    planed_start_time: time
    comment: Optional[str] = None
    services: List[ServiceItem]



class SUserShort(BaseModel):
    id: int
    name: str
    surname: str
    patronymic: Optional[str] = None
    phone_number: Optional[str] = None

class SSepticShort(BaseModel):
    id: int
    model: str
    volume: int


class SRequestServiceShort(BaseModel):
    service_id: int
    amount: int
    name: str

class SRequestFull(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
    client_id: int
    contract_number: Optional[str]
    status: str
    summary: int
    septic_id: int
    planed_start_time: time
    planed_start_date: date

    client: SUserShort
    septic: SSepticShort
    services: List[SRequestServiceShort]


class SRequestEdit(BaseModel):
    status: Optional[str]
    planed_start_time: Optional[time]
    planed_start_date: Optional[date]
    brigadier_id: Optional[int]
    contract_number: Optional[str]


