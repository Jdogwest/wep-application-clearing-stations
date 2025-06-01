from datetime import datetime


class RBRequest:
    def __init__(self, id: int | None = None,
                 created_at: datetime | None = None,
                 client_id: int | None = None,
                 contract_number: str | None = None,
                 status: str | None = None,
                 summary: int | None = None,
                 septic_id: int | None = None):
        self.id = id
        self.created_at = created_at
        self.client_id = client_id
        self.contract_number = contract_number
        self.status = status
        self.summary = summary
        self.septic_id = septic_id

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 'created_at': self.created_at, 'client_id': self.client_id, 'contract_number': self.contract_number, 'status': self.status, 'summary': self.summary, 'septic_id': self.septic_id}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data