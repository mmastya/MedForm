"use client";

import { useEffect, useState } from "react";
import { Notification } from "./components/shared/notification";
import { Form } from "./components/form-elements/form";

export default function Home() {
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (success !== null) {
        setSuccess(null);
      }
    }, 5000);
  }, [success]);

  return (
    <div>
      <Form setSuccess={setSuccess} />
      {success === true && (
        <Notification message="Новый клиент успешно создан" />
      )}
    </div>
  );
}
