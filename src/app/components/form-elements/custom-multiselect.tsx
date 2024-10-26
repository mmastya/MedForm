import React from "react";
import Select from "react-select";
import cn from "classnames";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldValues, IOption } from "./form";

interface Props {
  className?: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  options: IOption[];
  title: string;
  placeholder: string;
}

export const CustomMultiSelect: React.FC<Props> = ({
  className,
  control,
  errors,
  options,
  title,
  placeholder
}) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
    <label htmlFor={title} className="text-sky-900">
       {title}
      </label>
      <Controller
        name="multiselect"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Заполните обязательное поле",
          },
        }}
        render={({ field }) => (
          <>
            <Select
              classNamePrefix={
                errors.multiselect?.message
                  ? "custom-select-error"
                  : "custom-select"
              }
              value={options.filter(
                (opt) => field.value.indexOf(opt.value) >= 0
              )}
              onChange={(val) => field.onChange(val.map((v) => v.value))}
              options={options}
              isMulti
              placeholder={placeholder}
              id={title}
            />
            {errors.multiselect?.message && (
              <div className="text-rose-600 text-sm">
                {errors.multiselect?.message}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};
