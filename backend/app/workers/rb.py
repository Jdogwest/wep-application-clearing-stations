class RBWorker:
    def __init__(self,
                 worker_id: int | None = None,
                 fio: str | None = None,
                 phone_number: str | None = None,
                 position: str | None = None):
        self.id = worker_id
        self.fio = fio
        self.phone_number = phone_number
        self.position = position

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 'fio': self.fio, 'phone_number': self.phone_number, 'position': self.position}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data