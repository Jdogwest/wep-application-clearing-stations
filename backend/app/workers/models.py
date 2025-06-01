from sqlalchemy.orm import Mapped, relationship
from app.database import Base, int_pk


class Worker(Base):
    id: Mapped[int_pk]
    fio: Mapped[str]
    phone_number: Mapped[str]
    position: Mapped[str]

    brigadier_relations = relationship(
        "WorkmanBrigadier",
        foreign_keys="WorkmanBrigadier.brigadier_id",
        back_populates="brigadier"
    )

    workman_relations = relationship(
        "WorkmanBrigadier",
        foreign_keys="WorkmanBrigadier.workman_id",
        back_populates="workman"
    )

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
            "fio": self.fio,
            "phone_number": self.phone_number,
            "position": self.position
        }