import { useState } from 'react';

export default function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(e.target.name + ' ', value);
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  return { form, handleChange };
}
