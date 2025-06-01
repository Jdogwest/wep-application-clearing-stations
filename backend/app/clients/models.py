from sqlalchemy.orm import Mapped, relationship
from app.database import Base, int_pk
from app.septics.models import Septic

class Client(Base):
    id: Mapped[int_pk]
    fio: Mapped[str]
    phone_number: Mapped[str]
    email: Mapped[str]

    septics = relationship("Septic", back_populates="owner")
    requests = relationship("Request", back_populates="client")

    def __str__(self):
        return (f"{self.__class__.__name__}(id={self.id}, "
                f"fio={self.fio!r},"
                f"phone_number={self.phone_number!r}),"
                f"email={self.email!r})")

    def __repr__(self):
        return str(self)
    
    def to_dict(self):
        return {
            "id": self.id,
            "fio": self.fio,
            "phone_number": self.phone_number,
            "email": self.email,
            "septics": [septic.to_dict() for septic in self.septics]
        }