from fastapi import FastAPI 
from app.clients.router import router as router_clients
from app.workers.router import router as router_workers
from app.septics.router import router as router_septics
from app.services.router import router as router_services


app = FastAPI()

app.include_router(router_clients)
app.include_router(router_workers)
app.include_router(router_septics)
app.include_router(router_services)



