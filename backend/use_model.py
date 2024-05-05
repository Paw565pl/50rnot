from pathlib import Path
from typing import Any, Literal

import joblib
import keras
import numpy as np
import pandas as pd
from sklearn.calibration import LabelEncoder
from sklearn.compose import ColumnTransformer

ARTIFACTS_DIR = Path("./artifacts")

preprocessor: ColumnTransformer = joblib.load(
    ARTIFACTS_DIR.joinpath("preprocessor.joblib")
)
label_encoder: LabelEncoder = joblib.load(
    ARTIFACTS_DIR.joinpath("label_encoder.joblib")
)
model: keras.models.Sequential = keras.saving.load_model(
    ARTIFACTS_DIR.joinpath("model.keras")
)  # type: ignore


def make_prediction(input: dict[str, Any]) -> tuple[Literal["<=50K", ">50K"], float]:
    input_df = pd.DataFrame([input])
    encoded_input = preprocessor.transform(
        input_df
    )  # raises ValueError if data is invalid

    prediction = model.predict(encoded_input)[0]
    rounded_prediction = np.round(prediction).astype("int")

    prediction_class = label_encoder.inverse_transform(rounded_prediction)[0]
    prediction_probability = (
        100 - round(prediction[0] * 100)
        if prediction_class == "<=50K"
        else round(prediction[0] * 100)
    )

    return prediction_class, prediction_probability


# my_input = {
#     "age": 90,
#     "workclass": "?",
#     "education": "HS-grad",
#     "education_num": 9,
#     "marital_status": "Widowed",
#     "occupation": "?",
#     "relationship": "Not-in-family",
#     "race": "White",
#     "sex": "Female",
#     "capital_gain": 0,
#     "capital_loss": 4356,
#     "hours_per_week": 40,
#     "native_country": "United-States",
# }
# print(make_prediction(my_input))
