class RBSeptic:
    def __init__(self, septic_id: int | None = None,
                 address: str | None = None,
                 volume: str | None = None,
                 model: str | None = None,
                 owner: int | None = None):
        self.id = septic_id
        self.address = address
        self.volume = volume
        self.model = model
        self.owner = owner

        
    def to_dict(self) -> dict:
        data = {'id': self.id, 'address': self.address, 'volume': self.volume, 'model': self.model, 'owner': self.owner}
        filtered_data = {key: value for key, value in data.items() if value is not None}
        return filtered_data