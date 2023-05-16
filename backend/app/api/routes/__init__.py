from fastapi import APIRouter
from app.api.routes.patients import router as patients_router

router = APIRouter()

router.include_router(patients_router, prefix="/patients", tags=["patients"])


