from datetime import datetime
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