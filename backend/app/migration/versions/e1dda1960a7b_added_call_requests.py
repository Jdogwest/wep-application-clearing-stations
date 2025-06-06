"""added call requests

Revision ID: e1dda1960a7b
Revises: 23f70e6b36e7
Create Date: 2025-06-05 18:28:54.281928

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e1dda1960a7b'
down_revision: Union[str, None] = '23f70e6b36e7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('callrequests',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('fio', sa.String(), nullable=False),
    sa.Column('phone_number', sa.String(), nullable=False),
    sa.Column('comment', sa.String(), nullable=False),
    sa.Column('status', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.alter_column('requests', 'contract_number',
               existing_type=sa.VARCHAR(),
               nullable=True)
    op.create_unique_constraint(None, 'users', ['email'])
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='unique')
    op.alter_column('requests', 'contract_number',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.drop_table('callrequests')
    # ### end Alembic commands ###
