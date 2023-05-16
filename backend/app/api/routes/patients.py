from typing import List
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_all_patients() -> List[dict]:
    patients = []
    return patients

