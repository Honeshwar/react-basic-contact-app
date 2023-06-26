import { useState } from "react";

export default function useContactHook(initialState) {
  const [name, setName] = useState(initialState.name);
  const [phone, setPhone] = useState(initialState.phone);

  return {
    name,
    setName,
    phone,
    setPhone
  };
}
