import { useId } from "react";
import { DaDataFio, DaDataSuggestion, FioSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import cn from "classnames";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FieldValues } from "./form";

interface Props {
  className?: string;
  label: string;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const InputFIO: React.FC<Props> = ({
  label,
  className,
  control,
  errors,
}) => {
  const id = useId();

  const isValidFio = (value: DaDataSuggestion<DaDataFio> | string) => {
    const regex = /^[А-яЁё][А-яЁё’\- ]*$/;

    return regex.test(String(value));
  };

  ///^[А-яЁё][А-яЁё’\- ]*$/
  return (
    <Controller
      name="fio"
      control={control}
      rules={{
        required: {
          value: true,
          message: "Заполните обязательное поле",
        },
        pattern: /^[А-яЁё][А-яЁё’\- ]*$/,
        validate: (value) => isValidFio(value),
      }}
      render={({ field: { onChange, value } }) => (
        <div className={cn("mb-5", className)}>
          <label htmlFor={label} className="text-sky-900">
            {label}
          </label>
          <FioSuggestions
            token="d789e199129679755769099b8e2a71571edbbc52"
            minChars={2}
            value={value}
            onChange={onChange}
            uid={id}
            inputProps={{
              placeholder: "Иванов Иван Иванович",
              className:
                "w-full px-2 py-2 border rounded-md border-sky-500 hover:border-gray-400 focus:border-sky-300",
              id: label,
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
