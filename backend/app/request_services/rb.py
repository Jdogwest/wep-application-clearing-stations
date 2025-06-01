class RBRequestService:
    def __init__(self, id: int | None = None,
                 service_id: int | None = None,
                 amount: int | None = None,
                 planed_start_date: str | None = None,
                 planed_start_time: str | None = None):
        self.id = id
        self.service_id = service_id
        self.amount = amount
        self.planed_start_date = planed_start_date
        self.planed_start_time = planed_start_time

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 'service_id': self.service_id, 'amount': self.amount, 'planed_start_date': self.planed_start_date, 'planed_start_time': self.planed_start_time}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data