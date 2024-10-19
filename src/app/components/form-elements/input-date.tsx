import { Input } from "@/app/shared/input";
import { Control, Controller, FieldErrors } from "react-hook-form";
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
  return (
    <Controller
      control={control}
      name="date"
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          onChange={(val) => onChange(val)}
          type={type}
          label={label}
          className={className}
          errors={errors}
        />
      )}
    />
  );
};
