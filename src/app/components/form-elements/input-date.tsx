import { Input } from "@/app/components/shared/input";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormValidation } from "../shared/types/form-validation";
import { FieldValues } from "./form";

interface Props {
  type: string;
  label: string;
  className?: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputDate: React.FC<Props> = ({
  type,
  label,
  className,
  control,
  errors,
}) => {
  let validation: FormValidation;

  if (errors.date?.message) {
    validation = {
      type: "error",
      message: errors.date.message,
    };
  }

  return (
    <Controller
      control={control}
      name="date"
      rules={{
        required: {
          value: true,
          message: "Заполните обязательное поле",
        },
      }}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          onChange={(val) => onChange(val)}
          type={type}
          label={label}
          className={className}
          validation={validation}
        />
      )}
    />
  );
};
