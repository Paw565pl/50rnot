import { ReactNode } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import ReactSelect, { GroupBase, Props } from "react-select";
import InputErrorMessage from "../InputErrorMessage";

interface Option {
  value: string;
  label: string;
}

interface AutoCompleteSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  label: ReactNode;
  options: Option[];
  control: Control<any>;
  name: string;
  error?: FieldError;
}

const AutoCompleteSelect = ({
  label,
  options,
  control,
  name,
  error,
  ...props
}: AutoCompleteSelect<Option>) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ...field } }) => (
          <ReactSelect
            {...field}
            value={options.find((option) => option.value === value) || null}
            onChange={(option) => onChange(option?.value)}
            unstyled
            classNames={{
              control: (state) =>
                `text-sm select select-bordered w-full ${
                  state.isFocused && "border-primary"
                }`,
              option: (state) =>
                `tab text-left ${state.isFocused && "tab-active bg-primary"}`,
              menuList: () => "mt-2 bg-base-200",
              input: () => "max-w-1",
            }}
            closeMenuOnSelect
            isSearchable
            components={{
              DropdownIndicator: null,
            }}
            placeholder="Select an option"
            options={options}
            {...props}
          />
        )}
      />
      <InputErrorMessage error={error} />
    </label>
  );
};

export default AutoCompleteSelect;
