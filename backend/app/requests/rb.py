from datetime import date, datetime, time


class RBRequest:
    def __init__(self, id: int | None = None,
                 created_at: datetime | None = None,
                 client_id: int | None = None,
                 contract_number: str | None = None,
                 status: str | None = None,
                 summary: int | None = None,
                 septic_id: int | None = None,
                 planed_start_date: date | None = None,
                 planed_start_time: time | None = None,
                 comment: str | None = None,):
        self.id = id
        self.created_at = created_at
        self.client_id = client_id
        self.contract_number = contract_number
        self.status = status
        self.summary = summary
        self.septic_id = septic_id
        self.planed_start_time = planed_start_time
        self.planed_start_date = planed_start_date
        self.comment = comment

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 
                'created_at': self.created_at, 
                'client_id': self.client_id, 
                'contract_number': self.contract_number, 
                'status': self.status, 
                'summary': self.summary, 
                'septic_id': self.septic_id, 
                'planed_start_time': self.planed_start_time,
                'planed_start_date': self.planed_start_date,
                'comment': self.comment}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data