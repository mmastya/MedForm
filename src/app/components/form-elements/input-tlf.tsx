import { Input } from "@/app/shared/input";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldValues } from "./form";
import { ChangeEvent } from "react";

interface Props {
  type: string;
  label: string;
  autoComplete?: string;
  className?: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputTLF: React.FC<Props> = ({
  type,
  label,
  autoComplete,
  className,
  control,
  errors,
}) => {

  const isValid = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\W]*$/;
    
    if (regex.test(e.target.value)) {
      return e.target.value;
    }
  };

  return (
    <Controller
      name="tel"
      control={control}
      rules={{ required: true, pattern: /^[0-9\W]*$/}}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          onChange={(val) => onChange(isValid(val))}
          type={type}
          label={label}
          autoComplete={autoComplete}
          className={className}
          placeholder="+7(999)-999-99-99"
          errors={errors}
        />
      )}
    />
  );
};
