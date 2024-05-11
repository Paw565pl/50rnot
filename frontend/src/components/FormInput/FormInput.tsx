import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import InputErrorMessage from "../InputErrorMessage";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput = ({ label, register, error, ...props }: FormInputProps) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        className="input input-bordered w-full text-sm focus:border-primary focus:outline-none"
        {...props}
        {...register}
      />
      <InputErrorMessage error={error} />
    </label>
  );
};

export default FormInput;
