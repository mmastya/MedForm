import cn from "classnames";
import { ChangeEventHandler } from "react";
import { FormValidation } from "./types/form-validation";

interface Props {
  className?: string;
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  autoComplete?: string;
  validation?: FormValidation;
}

export const Input: React.FC<Props> = ({
  className,
  type,
  label,
  placeholder,
  value,
  autoComplete,
  onChange,
  validation,
}) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
      <label htmlFor={label} className="text-sky-900">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={label}
        autoComplete={autoComplete}
        className={
          validation?.type === "error"
            ? "w-full px-2 py-2 border rounded-md border-rose-600"
            : validation?.type === "warning"
            ? "w-full px-2 py-2 border rounded-md border-yellow-600"
            : "w-full px-2 py-2 border rounded-md border-sky-500 hover:border-gray-400 focus:border-sky-300"
        }
      />
      {validation && (
        <div className="text-rose-600 text-sm">{validation.message}</div>
      )}
    </div>
  );
};
