import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import selectInputs from "../../data/selectInputs.json";
import useMakePrediction from "../../hooks/useMakePrediction";
import predictionSchema, {
  PredictionValues,
} from "../../schemas/predictionSchema";
import AutoCompleteSelect from "../AutoCompleteSelect";
import FormInput from "../FormInput";
import PredictionText from "./PredictionText";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    reset: resetFormState,
    formState: { errors },
  } = useForm<PredictionValues>({
    resolver: zodResolver(predictionSchema),
  });
  const {
    data: prediction,
    mutate: sendFormData,
    reset: resetPrediction,
    isSuccess,
    isError,
    isPending,
  } = useMakePrediction();

  const onSubmit: SubmitHandler<PredictionValues> = (formData) =>
    sendFormData(formData);

  const resetForm = () => {
    resetFormState();
    resetPrediction();
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:justify-between md:space-x-2">
        <div className="flex w-full justify-between space-x-2">
          <div className="w-full md:w-1/2">
            <FormInput
              label="Age"
              register={register("age")}
              error={errors.age}
            />
          </div>
          <AutoCompleteSelect
            label="Sex"
            options={selectInputs.sex}
            name="sex"
            control={control}
            error={errors.sex}
          />
        </div>
        <AutoCompleteSelect
          label="Race"
          options={selectInputs.race}
          name="race"
          control={control}
          error={errors.race}
        />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <AutoCompleteSelect
          label="Education level"
          options={selectInputs.education}
          name="education"
          control={control}
          error={errors.education}
        />
        <FormInput
          label="Total years of education"
          register={register("education_num")}
          error={errors.education_num}
        />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <AutoCompleteSelect
          label="Martial status"
          options={selectInputs.marital_status}
          name="marital_status"
          control={control}
          error={errors.marital_status}
        />
        <AutoCompleteSelect
          label="Relationship status"
          options={selectInputs.relationship}
          name="relationship"
          control={control}
          error={errors.relationship}
        />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <AutoCompleteSelect
          label="Workclass"
          options={selectInputs.workclass}
          maxMenuHeight={250}
          name="workclass"
          control={control}
          error={errors.workclass}
        />
        <AutoCompleteSelect
          label="Occupation"
          options={selectInputs.occupation}
          maxMenuHeight={250}
          name="occupation"
          control={control}
          error={errors.occupation}
        />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <FormInput
          label="Work hours per week"
          register={register("hours_per_week")}
          error={errors.hours_per_week}
        />
        <FormInput
          label="Capital gain ($)"
          register={register("capital_gain")}
          error={errors.capital_gain}
        />
        <FormInput
          label="Capital loss ($)"
          register={register("capital_loss")}
          error={errors.capital_loss}
        />
      </div>
      <AutoCompleteSelect
        label="Native country"
        options={selectInputs.native_country}
        maxMenuHeight={200}
        name="native_country"
        control={control}
        error={errors.native_country}
      />
      <div className="flex items-center justify-between space-x-4 pt-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => resetForm()}
        >
          Reset
        </button>
        {isError && (
          <span role="alert" className="text-sm text-error sm:text-base">
            Something went wrong! Try again later.
          </span>
        )}
        {isSuccess && <PredictionText prediction={prediction} />}
        <button type="submit" className="btn btn-accent" disabled={isPending}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
