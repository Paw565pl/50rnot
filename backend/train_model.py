from pathlib import Path

import joblib
import keras
import pandas as pd
from sklearn.calibration import LabelEncoder
from sklearn.compose import make_column_transformer
from sklearn.discriminant_analysis import StandardScaler
from sklearn.model_selection import train_test_split
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

X_train, X_test, y_train, y_test = train_test_split(X_encoded, y_encoded, test_size=0.3)

features_amount = X_train.shape[1]
model = keras.models.Sequential()

model.add(keras.layers.Input(shape=(features_amount,)))
model.add(
    keras.layers.Dense(
        32,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.25))
model.add(
    keras.layers.Dense(
        32,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.25))
model.add(
    keras.layers.Dense(
        64,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.25))
model.add(
    keras.layers.Dense(
        64,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.25))
model.add(
    keras.layers.Dense(
        128,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.25))
model.add(
    keras.layers.Dense(
        128,
        activation="relu",
    )
)
model.add(keras.layers.Dropout(0.5))
model.add(keras.layers.Dense(1, activation="sigmoid"))

model.compile(optimizer="adamw", loss="binary_crossentropy", metrics=["accuracy"])

checkpoint = keras.callbacks.ModelCheckpoint(
    ARTIFACTS_DIR.joinpath("model.keras"),
    monitor="val_loss",
    verbose=1,
    save_best_only=True,
    mode="min",
    save_weights_only=False,
)

callbacks = [checkpoint]
history = model.fit(
    X_train, y_train, epochs=30, validation_data=(X_test, y_test), callbacks=callbacks
)

_, test_accuracy = model.evaluate(X_test, y_test, verbose="2")
print(f"Model accuracy: {test_accuracy*100:.2f}%")
