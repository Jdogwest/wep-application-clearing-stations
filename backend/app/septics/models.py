from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.database import Base, int_pk


class Septic(Base):
    id: Mapped[int_pk]
    address: Mapped[str]
    volume: Mapped[int]
    model: Mapped[str]
    owner_id: Mapped[int] = mapped_column(Integer, ForeignKey("clients.id"))

    owner = relationship("Client", back_populates="septics")

    def __str__(self):
        return (f"{self.__class__.__name__}(id={self.id}, "
                f"fio={self.fio!r},"
                f"phone_number={self.phone_number!r}),"
                f"position={self.email!r})")

    def __repr__(self):
        return str(self)
    
    def to_dict(self):
        return {
            "id": self.id,
            "address": self.address,
            "volume": self.volume,
            "model": self.model,
            "owner": self.owner
        }