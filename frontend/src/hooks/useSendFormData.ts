import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Prediction from "../entities/Prediction";
import { FormValues } from "../schemas/formSchema";
import httpService from "../services/httpService";

const sendFormData = async (postData: FormValues) => {
  const { data } = await httpService.post<Prediction>("/predict", postData);
  return data;
};

const useSendFormData = () =>
  useMutation<Prediction, AxiosError, FormValues>({
    mutationKey: ["prediction"],
    mutationFn: sendFormData,
  });

export default useSendFormData;
