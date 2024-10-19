import cn from "classnames";
import { Control, Controller } from "react-hook-form";
import { FieldValues } from "./form";

interface Props {
  className?: string;
  control: Control<FieldValues>;
}

export const RadioGender: React.FC<Props> = ({ className, control }) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
      <p className="text-sky-900">Пол</p>
      <div className="flex">
        <label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <input
                type="radio"
                value="Male"
                name="gender"
                className="mr-4 accent-pink-500"
                checked={field.value === "Male"}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          Мужской
        </label>
        <label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <input
                type="radio"
                value="Female"
                name="gender"
                className="mr-4 ml-5 accent-pink-500"
                checked={field.value === "Female"}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          Женский
        </label>
      </div>
    </div>
  );
};
