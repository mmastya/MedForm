import { Control, Controller } from "react-hook-form";
import { FieldValues } from "./form";

interface Props {
  label: string;
  control: Control<FieldValues>;
}

export const Checkbox: React.FC<Props> = ({ label, control }) => {
  return (
    <div>
      <label htmlFor={label} className="text-sky-900 mr-5">
        {label}
      </label>
      <Controller
        name="noSMS"
        control={control}
        render={({ field }) => (
          <input
            type="checkbox"
            id={label}
            checked={field.value}
            onClick={() => field.onChange(!field.value)}
            className="accent-pink-500"
          />
        )}
      />
    </div>
  );
};
