import { InputHTMLAttributes, ReactNode } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const FormInput = ({ label, ...props }: FormInputProps) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        {...props}
        className="input input-bordered w-full focus:outline-none focus:border-primary text-sm"
      />
    </label>
  );
};

export default FormInput;
