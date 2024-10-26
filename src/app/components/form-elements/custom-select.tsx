import cn from "classnames";
import React from "react";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { FieldValues, IOption } from "./form";

interface Props {
  className?: string;
  control: Control<FieldValues>;
  options: IOption[];
  title: string;
  placeholder: string
}

export const CustomSelect: React.FC<Props> = ({ className, control, options, title, placeholder}) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
      <label htmlFor={title} className="text-sky-900">
        {title}
      </label>
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
            options={options}
            classNamePrefix="custom-select"
            value={options.find((c) => c.value === field.value)}
            onChange={(val) => field.onChange(val?.value)}
            placeholder={placeholder}
            id={title}
          />
        )}
      />
    </div>
  );
};
