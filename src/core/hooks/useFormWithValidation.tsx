import { useState, ChangeEvent } from 'react';
import { checkValidity } from '../utils/checkValidity';

interface InputValues {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

interface FormWithValidation {
  values: InputValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errors: Errors;
  setValues: (values: InputValues) => void;
  setErrors: (errors: Errors) => void;
}

export function useFormWithValidation(inputValues: InputValues = {}): FormWithValidation {
  const [values, setValues] = useState<InputValues>(inputValues);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: checkValidity(name, value)});
    setValues({ ...values, [name]: value });

    if (name === 'confirmPassword') {
      if (values.password !== value) {
        setErrors({ ...errors, confirmPassword: 'Пароли не совпадают' });
      } else {
        setErrors({ ...errors, confirmPassword: '' });
      }
    }
  };

  return { values, handleChange, errors, setValues, setErrors };
}