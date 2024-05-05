from fastapi import FastAPI

from model_input import ModelInput
from use_model import make_prediction

app = FastAPI()


@app.post("/predict")
async def predict(model_input: ModelInput):
    model_input_dict = model_input.model_dump()
    prediction, probability = make_prediction(model_input_dict)

    return {"prediction": prediction, "probability": probability}
