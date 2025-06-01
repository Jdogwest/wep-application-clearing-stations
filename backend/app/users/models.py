from sqlalchemy import text
from sqlalchemy.orm import Mapped, relationship, mapped_column
from app.database import Base, int_pk


class User(Base):
    id: Mapped[int_pk]
    fio: Mapped[str]
    phone_number: Mapped[str]
    email: Mapped[str]
    password: Mapped[str]

    is_user: Mapped[bool] = mapped_column(default=True, server_default=text('true'), nullable=False)
    is_client: Mapped[bool] = mapped_column(default=False, server_default=text('false'), nullable=False)
    is_manager: Mapped[bool] = mapped_column(default=False, server_default=text('false'), nullable=False)
    is_brigadier: Mapped[bool] = mapped_column(default=False, server_default=text('false'), nullable=False)
    is_workman: Mapped[bool] = mapped_column(default=False, server_default=text('false'), nullable=False)
    is_admin: Mapped[bool] = mapped_column(default=False, server_default=text('false'), nullable=False)

    septics = relationship("Septic", back_populates="owner")
    requests = relationship("Request", back_populates="client")

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
                f"email={self.email!r}),"
                f"role={self.role!r})")

    def __repr__(self):
        return str(self)
    
    def to_dict(self):
        return {
            "id": self.id,
            "fio": self.fio,
            "phone_number": self.phone_number,
            "email": self.email,
            "role": self.role
        }