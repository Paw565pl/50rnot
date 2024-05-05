import { ReactNode } from "react";
import ReactSelect, { GroupBase, Props } from "react-select";

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
}

const AutoCompleteSelect = ({
  label,
  ...props
}: AutoCompleteSelect<Option>) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <ReactSelect
        unstyled
        classNames={{
          control: (state) =>
            `text-xs select select-bordered w-full ${
              state.isFocused && "border-primary"
            }`,
          option: (state) =>
            `tab text-left ${state.isFocused && "tab-active bg-primary"}`,
          menuList: () => "mt-2 bg-base-200",
        }}
        closeMenuOnSelect
        isSearchable
        required
        components={{
          DropdownIndicator: null,
        }}
        placeholder="Select an option"
        {...props}
      />
    </label>
  );
};

export default AutoCompleteSelect;
