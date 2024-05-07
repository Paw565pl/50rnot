from fastapi import FastAPI
from models import ModelInput, Prediction
from use_model import make_prediction

app = FastAPI()


@app.post("/predict")
async def predict(model_input: ModelInput) -> Prediction:
    model_input_dict = model_input.model_dump()
    prediction, probability = make_prediction(model_input_dict)

    return {"prediction": prediction, "probability": probability}
