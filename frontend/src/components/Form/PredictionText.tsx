import Prediction from "../../entities/Prediction";

interface PredictionTextProps {
  prediction?: Prediction;
}

const PredictionText = ({ prediction }: PredictionTextProps) => {
  if (!prediction) return null;
  const { prediction: value, probability } = prediction;

  const isPredictionPositive = value === ">50K";
  const message = isPredictionPositive
    ? `Congrats! There is ${probability}% chance that you are earning 50K $ a year or more. 🥳`
    : `Oops! There is ${probability}% chance that you are earning less than 50K $ a year. 😥`;

  return (
    <span
      className={`text-center sm:text-lg lg:text-xl ${
        isPredictionPositive ? "text-success" : "text-warning"
      }`}
      role="alert"
    >
      {message}
    </span>
  );
};

export default PredictionText;
