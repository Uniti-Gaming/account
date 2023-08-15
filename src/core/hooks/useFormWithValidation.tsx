import { useState, ChangeEvent } from 'react';

let form: HTMLFormElement | null = null;

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
  isValid: boolean;
  setValues: (values: InputValues) => void;
  setErrors: (errors: Errors) => void;
}

export function useFormWithValidation(inputValues: InputValues = {}, initialValid = false): FormWithValidation {
  const [values, setValues] = useState<InputValues>(inputValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isValid, setIsValid] = useState<boolean>(initialValid);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'confirmPassword') {
      if (values.password !== value) {
        target.setCustomValidity('Пароли не совпадают');
      } else {
        target.setCustomValidity('');
      }
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    if (!form) form = target.closest('form');
    if (form) setIsValid(form.checkValidity());
  };

  return { values, handleChange, errors, isValid, setValues, setErrors };
}
