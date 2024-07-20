import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Prediction from "../entities/prediction";
import { PredictionValues } from "../schemas/predictionSchema";
import httpService from "../services/httpService";

const makePrediction = async (predictionData: PredictionValues) => {
  const { data } = await httpService.post<Prediction>(
    "/predict",
    predictionData,
  );
  return data;
};

const useMakePrediction = () =>
  useMutation<Prediction, AxiosError, PredictionValues>({
    mutationKey: ["prediction"],
    mutationFn: makePrediction,
  });

export default useMakePrediction;
