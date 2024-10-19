import { ChangeEventHandler } from "react";
import cn from "classnames";
import { FieldErrors } from "react-hook-form";
import { FieldValues } from "../components/form-elements/form";

interface Props {
  className?: string;
  type: string;
  label: string;
  validationMassage?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  autoComplete?: string;
  errors: FieldErrors<FieldValues>;
}

export const Input: React.FC<Props> = ({
  className,
  type,
  label,
  placeholder,
  value,
  autoComplete,
  onChange,
  errors,
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
          errors.date?.type === "required" || errors.tel?.type === "required"
            ? "w-full px-2 py-2 border rounded-md border-rose-600"
            : "w-full px-2 py-2 border rounded-md border-sky-500 hover:border-sky-900 focus:border-sky-300"
        }
      />
      {(errors.date?.type === "required" ||
        errors.tel?.type === "required") && (
        <div className="text-rose-600 text-sm">Заполните обязательное поле</div>
      )}
    </div>
  );
};
