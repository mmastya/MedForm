import React from "react";
import Select from "react-select";
import cn from "classnames";
import { Control, Controller } from "react-hook-form";
import { FieldValues } from "./form";

interface IOption {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  control: Control<FieldValues>;
}

const options: IOption[] = [
  { value: "Петров", label: "Петров" },
  { value: "Захаров", label: "Захаров" },
  { value: "Черниговская", label: "Черниговская" },
];

export const CustomSelect: React.FC<Props> = ({ className, control }) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
      <label htmlFor="doctor" className="text-sky-900">
        Лечащий врач
      </label>
      <Controller
      
        name="select"
        control={control}
        render={({field}) => (
          <Select
            options={options}
            classNamePrefix="custom-select"
            value={options.find((c) => c.value === field.value)}
            onChange={(val) => field.onChange(val?.value)}
            placeholder="Выберите врача"
            id="doctor"
          />
        )}
      />
    </div>
  );
};
