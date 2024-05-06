import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import selectInputs from "../../data/selectInputs.json";
import formSchema, { FormValues } from "../../schemas/formSchema";
import AutoCompleteSelect from "../AutoCompleteSelect";
import FormInput from "../FormInput";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:justify-between md:space-x-2">
        <FormInput label="Age" register={register("age")} error={errors.age} />
        <AutoCompleteSelect
          label="Sex"
          options={selectInputs.sex}
          name="sex"
          control={control}
          error={errors.sex}
        />
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
      <div className="lg:flex md:justify-between lg:space-x-2">
        <AutoCompleteSelect
          label="Workclass"
          options={selectInputs.workclass}
          name="workclass"
          control={control}
          error={errors.workclass}
        />
        <AutoCompleteSelect
          label="Occupation"
          options={selectInputs.occupation}
          name="occupation"
          control={control}
          error={errors.occupation}
        />
        <FormInput
          label="Work hours per week"
          register={register("hours_per_week")}
          error={errors.hours_per_week}
        />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
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
      <div className="flex justify-between pt-2">
        <button type="reset" className="btn btn-secondary">
          Reset
        </button>
        <button type="submit" className="btn btn-accent">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
