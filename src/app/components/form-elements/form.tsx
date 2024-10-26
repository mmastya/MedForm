"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "./checkbox";
import { CustomMultiSelect } from "./custom-multiselect";
import { CustomSelect } from "./custom-select";
import { InputDate } from "./input-date";
import { InputFIO } from "./input-fio";
import { RadioGender } from "./radio-gender";
import { InputPhone } from "./input-phone";
import { Button } from "./button";

type Props = {
  setSuccess: (value: boolean) => void;
};

export type FieldValues = {
  fio?: string;
  date: string;
  phone: string;
  gender: string;
  multiselect: Array<string>;
  select: string;
  noSMS: boolean;
};

const defaultValues: FieldValues = {
  fio: undefined,
  date: "",
  phone: "",
  gender: "",
  multiselect: [],
  select: "",
  noSMS: false,
};

export interface IOption {
  value: string;
  label: string;
}

const doctors: IOption[] = [
  { value: "Петров", label: "Петров" },
  { value: "Захаров", label: "Захаров" },
  { value: "Черниговская", label: "Черниговская" },
];

const clients: IOption[] = [
  { value: "VIP", label: "VIP" },
  { value: "Проблемные", label: "Проблемные" },
  { value: "ОМС", label: "ОМС" },
  { value: "ДМС", label: "ДМС" },
];

export const Form: React.FC<Props> = ({ setSuccess }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues });

  const onSubmit: SubmitHandler<FieldValues> = (form) => {
    setSuccess(true);
    console.log(form);
  };

  const onError: SubmitErrorHandler<FieldValues> = (errors) => {
    setSuccess(false);
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
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
        <InputPhone
          label="Номер телефона"
          type="phone"
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
          options={clients}
          title="Группа клиентов"
          placeholder="Выберите клиентов"
        />
        <CustomSelect
          className="tablet:w-[50%]"
          control={control}
          options={doctors}
          title="Лечащий врач"
          placeholder="Выберите врача"
        />
      </div>

      <Checkbox label="Не отправлять СМС" control={control} />

      <Button title="Подтвердить данные"/>
    </form>
  );
};
