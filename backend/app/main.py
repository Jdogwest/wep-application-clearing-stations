from fastapi import FastAPI 
from app.clients.router import router as router_clients
from app.workers.router import router as router_workers


app = FastAPI()

@app.get("/")
def home_page():
    return {"message": "Привет, Хабр!"}

app.include_router(router_clients)
app.include_router(router_workers)



