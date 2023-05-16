"""create_patients_tables

Revision ID: 8bd3027ef669
Revises: 
Create Date: 2023-05-16 19:43:49.581828

"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic
revision = '8bd3027ef669'
down_revision = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    op.create_table(
        "patients",
        sa.Column("id", sa.CHAR(36), primary_key=True),
        sa.Column("name", sa.String(100), nullable=False, index=True),
        sa.Column("notes", sa.Text, nullable=True)
    )

def downgrade() -> None:
    op.drop_table("patients")
