import { useState } from 'react';

interface FormValues {
  [key: string]: string;
}

interface UseFormReturn {
  values: FormValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export function useForm(inputValues: FormValues = {}): UseFormReturn {
  const [values, setValues] = useState<FormValues>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
