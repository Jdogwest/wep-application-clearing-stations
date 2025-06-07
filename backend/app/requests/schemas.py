from datetime import date, datetime, time
from typing import List, Optional
from pydantic import BaseModel, ConfigDict


class SRequest(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    created_at: datetime
    client_id: int
    contract_number: str
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