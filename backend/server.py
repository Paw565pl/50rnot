from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import ModelInput, Prediction
from use_model import make_prediction

app = FastAPI()

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://frontend:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
    "http://frontend:4173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict(model_input: ModelInput) -> Prediction:
    model_input_dict = model_input.model_dump()
    prediction, probability = make_prediction(model_input_dict)

    return {"prediction": prediction, "probability": probability}
