from pathlib import Path

import joblib
import pandas as pd
from sklearn.calibration import LabelEncoder
from sklearn.compose import make_column_transformer
from sklearn.discriminant_analysis import StandardScaler
from sklearn.preprocessing import OneHotEncoder

DATASET_LOCATION = Path("./data/adult.csv")
ARTIFACTS_DIR = Path("./artifacts")
PLOTS_DIR = Path("./plots")

df = pd.read_csv(DATASET_LOCATION).drop(columns=["fnlwgt"])
df.columns = df.columns.str.replace(".", "_")  # adjust column naming

na_records = df.isnull().sum().sum()
print(f"Number of na records: {na_records}")  # 0

duplicated_rows = df.duplicated().sum()
print(f"Number of duplicated rows: {duplicated_rows}")  # 3465
df.drop_duplicates(inplace=True)

print(f"Shape of dataset: {df.shape}")  # (29096, 14)

predict_class = "income"
X = df.drop(columns=[predict_class])
y = df[predict_class]

text_columns = X.select_dtypes(include=["object"]).columns
numeric_columns = X.select_dtypes(include=["number"]).columns

one_hot_encoder = OneHotEncoder()
scaler = StandardScaler()

preprocessor = make_column_transformer(
    (one_hot_encoder, text_columns), (scaler, numeric_columns), remainder="passthrough"
)

X_encoded = preprocessor.fit_transform(X)
joblib.dump(preprocessor, ARTIFACTS_DIR.joinpath("preprocessor.joblib"))

label_encoder = LabelEncoder()
y_encoded = label_encoder.fit_transform(y)
joblib.dump(label_encoder, ARTIFACTS_DIR.joinpath("label_encoder.joblib"))
