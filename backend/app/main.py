from fastapi import FastAPI 
from app.users.router import router as router_users
from app.septics.router import router as router_septics
from app.services.router import router as router_services
from app.requests.router import router as router_requests
from app.workman_brigadiers.router import router as router_workman_brigadiers
from app.request_services.router import router as router_request_services


app = FastAPI()

app.include_router(router_users)
app.include_router(router_septics)
app.include_router(router_services)
app.include_router(router_requests)
app.include_router(router_workman_brigadiers)
app.include_router(router_request_services)



