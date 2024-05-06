import { FieldError } from "react-hook-form";

interface InputErrorMessageProps {
  error?: FieldError;
}

const InputErrorMessage = ({ error }: InputErrorMessageProps) => {
  if (!error) return null;

  return (
    <div className="label">
      <span className="label-text-alt text-error" role="alert">
        {error.message}
      </span>
    </div>
  );
};

export default InputErrorMessage;
