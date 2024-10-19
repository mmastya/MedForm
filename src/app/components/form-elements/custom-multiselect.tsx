import React from "react";
import Select from "react-select";
import cn from "classnames";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldValues } from "./form";

interface IOption {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const options: IOption[] = [
  { value: "VIP", label: "VIP" },
  { value: "Проблемные", label: "Проблемные" },
  { value: "ОМС", label: "ОМС" },
  { value: "ДМС", label: "ДМС" },
];

export const CustomMultiSelect: React.FC<Props> = ({
  className,
  control,
  errors,
}) => {
  return (
    <div className={cn("flex flex-col mb-5", className)}>
      <label htmlFor="clients" className="text-sky-900">
        Группа клиентов
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
              classNamePrefix={errors.multiselect?.message ? "custom-select-error" : "custom-select"}
              value={options.filter(
                (opt) => field.value.indexOf(opt.value) >= 0
              )}
              onChange={(val) => field.onChange(val.map((v) => v.value))}
              options={options}
              isMulti
              placeholder="Выберите клиентов"
              id="clients"
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
