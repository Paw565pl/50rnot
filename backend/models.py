from typing import Literal

from pydantic import BaseModel


class ModelInput(BaseModel):
    age: int
    workclass: Literal[
        "?",
        "Private",
        "State-gov",
        "Federal-gov",
        "Self-emp-not-inc",
        "Self-emp-inc",
        "Local-gov",
        "Without-pay",
        "Never-worked",
    ]
    education: Literal[
        "HS-grad",
        "Some-college",
        "7th-8th",
        "10th",
        "Doctorate",
        "Prof-school",
        "Bachelors",
        "Masters",
        "11th",
        "Assoc-acdm",
        "Assoc-voc",
        "1st-4th",
        "5th-6th",
        "12th",
        "9th",
        "Preschool",
    ]
    education_num: int
    marital_status: Literal[
        "Widowed",
        "Divorced",
        "Separated",
        "Never-married",
        "Married-civ-spouse",
        "Married-spouse-absent",
        "Married-AF-spouse",
    ]
    occupation: Literal[
        "?",
        "Exec-managerial",
        "Machine-op-inspct",
        "Prof-specialty",
        "Other-service",
        "Adm-clerical",
        "Craft-repair",
        "Transport-moving",
        "Handlers-cleaners",
        "Sales",
        "Farming-fishing",
        "Tech-support",
        "Protective-serv",
        "Armed-Forces",
        "Priv-house-serv",
    ]
    relationship: Literal[
        "Not-in-family", "Unmarried", "Own-child", "Other-relative", "Husband", "Wife"
    ]
    race: Literal["White", "Black", "Asian-Pac-Islander", "Other", "Amer-Indian-Eskimo"]
    sex: Literal["Female", "Male"]
    capital_gain: int
    capital_loss: int
    hours_per_week: int
    native_country: Literal[
        "United-States",
        "?",
        "Mexico",
        "Greece",
        "Vietnam",
        "China",
        "Taiwan",
        "India",
        "Philippines",
        "Trinadad&Tobago",
        "Canada",
        "South",
        "Holand-Netherlands",
        "Puerto-Rico",
        "Poland",
        "Iran",
        "England",
        "Germany",
        "Italy",
        "Japan",
        "Hong",
        "Honduras",
        "Cuba",
        "Ireland",
        "Cambodia",
        "Peru",
        "Nicaragua",
        "Dominican-Republic",
        "Haiti",
        "El-Salvador",
        "Hungary",
        "Columbia",
        "Guatemala",
        "Jamaica",
        "Ecuador",
        "France",
        "Yugoslavia",
        "Scotland",
        "Portugal",
        "Laos",
        "Thailand",
        "Outlying-US(Guam-USVI-etc)",
    ]


class Prediction(BaseModel):
    prediction: Literal["<=50K", ">50K"]
    probability: float
