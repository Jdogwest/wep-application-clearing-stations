class RBClient:
    def __init__(self, client_id: int | None = None,
                 fio: str | None = None,
                 phone_number: str | None = None,
                 email: str | None = None):
        self.id = client_id
        self.fio = fio
        self.phone_number = phone_number
        self.email = email

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 'fio': self.fio, 'phone_number': self.phone_number, 'email': self.email}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data