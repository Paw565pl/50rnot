interface Prediction {
  prediction: "<=50K" | ">50K";
  probability: number;
}

export default Prediction;
