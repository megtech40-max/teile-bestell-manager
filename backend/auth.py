from fastapi import APIRouter, Request, Form
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/login")
async def login(request: Request,
                stakis_user: str = Form(...),
                stakis_pass: str = Form(...),
                avz_user: str = Form(...),
                avz_pass: str = Form(...),
                wg_user: str = Form(...),
                wg_pass: str = Form(...)):

    # Speichere Logins in Session
    request.session["logins"] = {
        "stakis": {"user": stakis_user, "pass": stakis_pass},
        "avz": {"user": avz_user, "pass": avz_pass},
        "wg": {"user": wg_user, "pass": wg_pass},
    }

    return JSONResponse({"success": True})


@router.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return JSONResponse({"success": True})