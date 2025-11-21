from pydantic import BaseModel
from typing import Optional, Dict

class SupplierItem(BaseModel):
    price: Optional[str] = None
    available: Optional[str] = None
    alternatives: Optional[str] = None
    direct_match: bool = False
    order_url: Optional[str] = None

class SupplierResult(BaseModel):
    stakis: Dict
    avz: Dict
    wg: Dict