import selectInputs from "../../data/selectInputs.json";
import AutoCompleteSelect from "../AutoCompleteSelect";
import FormInput from "../FormInput";

const Form = () => {
  return (
    <form className="space-y-2">
      <div className="md:flex md:justify-between md:space-x-2">
        <FormInput label="Age" />
        <AutoCompleteSelect label="Sex" options={selectInputs.sex} />
        <AutoCompleteSelect label="Race" options={selectInputs.race} />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <AutoCompleteSelect
          label="Education level"
          options={selectInputs.education}
        />
        <FormInput label="Total years of education" />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <AutoCompleteSelect
          label="Martial status"
          options={selectInputs.marital_status}
        />
        <AutoCompleteSelect
          label="Relationship status"
          options={selectInputs.relationship}
        />
      </div>
      <div className="lg:flex md:justify-between lg:space-x-2">
        <AutoCompleteSelect
          label="Workclass"
          options={selectInputs.workclass}
        />
        <AutoCompleteSelect
          label="Occupation"
          options={selectInputs.marital_status}
        />
        <FormInput label="Work hours per week" />
      </div>
      <div className="md:flex md:justify-between md:space-x-2">
        <FormInput label="Capital gain ($)" />
        <FormInput label="Capital loss ($)" />
      </div>
      <AutoCompleteSelect
        label="Native country"
        options={selectInputs.native_country}
        maxMenuHeight={200}
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
