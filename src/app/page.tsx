"use client";

import { useEffect, useState } from "react";
import { SuccessNotification } from "./shared/notification";
import { Form } from "./components/form-elements/form";

export default function Home() {
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (success) {
        setSuccess(false);
      }
    }, 8000);
  }, [success]);

  return (
    <div>
      <Form setSuccess={setSuccess} />
      {success && <SuccessNotification text="Новый клиент успешно создан" />}
    </div>
  );
}
