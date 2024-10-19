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
  return (
    <Controller
      name="tel"
      control={control}
      rules={{
        required: {
          value: true,
          message: "Заполните обязательное поле",
        },
        pattern: /^[0-9\W]*$/,
      }}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          onChange={(value) => onChange(value)}
          type={type}
          label={label}
          autoComplete={autoComplete}
          className={className}
          placeholder="+7(999)-999-99-99"
          errorMessage={errors.tel?.message}
        />
      )}
    />
  );
};
