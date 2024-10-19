import { ChangeEventHandler } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  type: string;
  label: string;
  validationMassage?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  autoComplete?: string;
  errorMessage?: string;
}

export const Input: React.FC<Props> = ({
  className,
  type,
  label,
  placeholder,
  value,
  autoComplete,
  onChange,
  errorMessage,
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
          errorMessage
            ? "w-full px-2 py-2 border rounded-md border-rose-600"
            : "w-full px-2 py-2 border rounded-md border-sky-500 hover:border-gray-400 focus:border-sky-300"
        }
      />
      {errorMessage && (
        <div className="text-rose-600 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
