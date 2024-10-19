"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "./checkbox";
import { CustomMultiSelect } from "./custom-multiselect";
import { CustomSelect } from "./custom-select";
import { InputDate } from "./input-date";
import { InputFIO } from "./input-fio";
import { InputTLF } from "./input-tlf";
import { RadioGender } from "./radio-gender";
import { DaDataFio, DaDataSuggestion } from "react-dadata";

interface Props {
  setSuccess: (value: boolean) => void;
}

export type FieldValues = {
  fio: DaDataSuggestion<DaDataFio> | "";
  date: string;
  tel: string;
  gender: string;
  multiselect: Array<string>;
  select: string;
  checkbox: boolean;
};

const defaultValues = {
  fio: "",
  date: "",
  tel: "",
  gender: "",
  multiselect: [],
  select: "",
  checkbox: false,
};

export const Form: React.FC<Props> = ({ setSuccess }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: defaultValues,
  });

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="relative px-5 py-5 desktop:w-[1024px] desktop:ml-auto mr-auto"
    >
      <div className="tablet:flex tablet:flex-row">
        <InputFIO
          label="ФИО"
          className="tablet:w-[50%] tablet:mr-3"
          control={control}
          errors={errors}
        />
        <InputDate
          type="date"
          label="Дата рождения"
          className="tablet:w-[50%]"
          control={control}
          errors={errors}
        />
      </div>

      <div className="tablet:flex tablet:flex-row">
        <InputTLF
          label="Номер телефона"
          type="tel"
          className="tablet:w-[50%] tablet:mr-3"
          control={control}
          errors={errors}
        />
        <RadioGender
          className="tablet:w-[50%] tablet:justify-around"
          control={control}
        />
      </div>

      <div className="tablet:flex tablet:flex-row">
        <CustomMultiSelect
          className="tablet:w-[50%] tablet:mr-3"
          control={control}
          errors={errors}
        />
        <CustomSelect className="tablet:w-[50%]" control={control} />
      </div>

      <Checkbox label="Не отправлять СМС" control={control} />

      <button
        onClick={() => Object.keys(errors).length === 0 && setSuccess(true)}
        type="submit"
        className="flex text-sky-900 border rounded-md border-sky-500 mt-5 mx-auto px-2 py-2 hover:bg-sky-50 focus:bg-sky-300"
      >
        Подтвердить данные
      </button>
    </form>
  );
};
