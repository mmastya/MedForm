import { Input } from "@/app/components/shared/input";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormValidation } from "../shared/types/form-validation";
import { FieldValues } from "./form";

interface Props {
  type: string;
  label: string;
  autoComplete?: string;
  className?: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputPhone: React.FC<Props> = ({
  type,
  label,
  autoComplete,
  className,
  control,
  errors,
}) => {
  let validation: FormValidation;

  if (errors.phone?.message) {
    validation = {
      type: "error",
      message: errors.phone.message,
    };
  }

  return (
    <Controller
      name="phone"
      control={control}
      rules={{
        required: "Заполните обязательное поле",
        pattern: {
          value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
          message: "Введите корректный номер телефона",
        },
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
          validation={validation}
        />
      )}
    />
  );
};
