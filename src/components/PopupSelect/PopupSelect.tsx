import { FC, Dispatch, SetStateAction } from 'react';
import Select, { SingleValue } from 'react-select';

import { IOption } from '@interfaces/optionInterface';
import './PopupSelect.scss';

interface PopupSelectProps {
    name: string;
    values: {
        [key: string]: string;
    };
    options: IOption[];
    setValues: Dispatch<SetStateAction<{
        [key: string]: string;
    }>>;
}

const PopupSelect: FC<PopupSelectProps> = ({ options, values, name, setValues }) => {
  const handleChange = (selectedOption: SingleValue<IOption>) => {
    if (selectedOption) {
      const newValue = (selectedOption as IOption).value;
      setValues({ ...values, [name]: newValue });
    }
  };

  return (
    <Select
      options={options}
      value={{ value: values[name], label: values[name] }}
      onChange={handleChange}
      required={true}
      classNamePrefix='popup-select'
      className='popup-select-container'
      name={name}
    />
  );
};

export default PopupSelect;