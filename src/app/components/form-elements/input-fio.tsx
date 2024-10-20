import cn from "classnames";
import { useEffect, useRef } from "react";
import { FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldValues } from "./form";

interface Props {
  className?: string;
  label: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const fioRegExp = /^[А-яЁё][А-яЁё’\- ]*$/;

export const InputFIO: React.FC<Props> = ({
  label,
  className,
  control,
  errors,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {});

  return (
    <Controller
      control={control}
      name="fio"
      rules={{
        required: "Заполните обязательное поле",
        validate: (value?: string) => {
          return fioRegExp.test(value ?? "")
            ? true
            : "Введите корректное ФИО";
        },
      }}
      render={({ field: { onChange } }) => (
        <div ref={inputRef} className={cn("mb-5", className)}>
          <label htmlFor={label} className="text-sky-900">
            {label}
          </label>
          <FioSuggestions
            token="d789e199129679755769099b8e2a71571edbbc52"
            minChars={2}
            delay={500}
            onChange={(daDataValue) => {
              onChange(daDataValue?.value);
            }}
            inputProps={{
              placeholder: "Иванов Иван Иванович",
              className: cn(
                "w-full px-2 py-2 border rounded-md hover:border-gray-400 focus:border-sky-300",
                errors.fio ? "border-rose-600" : "border-sky-500"
              ),
              id: label,
              onChange: (event) => {
                onChange(event.currentTarget.value);
              },
            }}
          />
          {errors.fio && (
            <div className="text-rose-600 text-sm">{errors.fio.message}</div>
          )}
        </div>
      )}
    />
  );
};
