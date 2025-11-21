from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware.sessions import SessionMiddleware

from suppliers.stakis import query_stakis
from suppliers.avz import query_avz
from suppliers.wg import query_wg
from auth import router as auth_router
from models import SupplierResult

app = FastAPI()

# -----------------------------
# 1) SESSION MIDDLEWARE – MUSS GANZ OBEN SEIN
# -----------------------------
app.add_middleware(
    SessionMiddleware,
    secret_key="SUPER_GEHEIMES_PASSWORT_12345",
    same_site="lax"
)

# -----------------------------
# 2) OPTIMALER CORS BLOCK
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# 3) ROUTER LADEN
# -----------------------------
app.include_router(auth_router, prefix="/auth")

# -----------------------------
# 4) API ENDPOINT
# -----------------------------
@app.get("/check/{oe}")
async def check_oe(oe: str, request: Request):

    stakis = await query_stakis(oe, request)
    avz = await query_avz(oe, request)
    wg = await query_wg(oe, request)

    results = SupplierResult(
        stakis=stakis,
        avz=avz,
        wg=wg
    )

    return JSONResponse(content=results.dict())