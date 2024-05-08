import Prediction from "../../entities/Prediction";

interface PredictionTextProps {
  prediction: Prediction | undefined;
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
      className={`text-sm sm:text-base md:text-lg xl:text-xl text-center ${
        isPredictionPositive ? "text-success" : "text-error"
      }`}
      role="alert"
    >
      {message}
    </span>
  );
};

export default PredictionText;
