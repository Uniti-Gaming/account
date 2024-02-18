import { CSSProperties, FC } from 'react';
import Select, { SingleValue } from 'react-select';

import { IOption } from '@interfaces/optionInterface';
import { SelectProps } from '@/core/interfaces/selectProps';

interface ReactSelectProps extends SelectProps {
  containerStyles: CSSProperties;
  controlStyles: CSSProperties;
  placeholder: string;
}

const ReactSelect: FC<ReactSelectProps> = ({
  options, values, name, setValues, placeholder,
  containerStyles, controlStyles,
  errors, error, setErrors }) => {
  const handleChange = (selectedOption: SingleValue<IOption>) => {
    if (selectedOption) {
      const newValue = selectedOption.value;
      setValues({ ...values, [name]: newValue });
      if (setErrors && errors) {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === values[name])}
      onChange={handleChange}
      placeholder={placeholder}
      required={true}
      name={name}
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          ...containerStyles,
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: '6px',
          backgroundColor: 'transparent',
          border: state.isFocused ? '1px solid #635790' : error ? '1px solid #DE3341' : '1px solid transparent',
          '&:hover': {
            borderColor: '#635790',
            boxShadow: 'none',
          },
          ...controlStyles,
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: 'inherit',
        }),
        indicatorSeparator: () => ({ opacity: 0 }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          maxHeight: '170px',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          zIndex: 10,
          backgroundColor: '#34323C',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? '#4e4e51cf' : '#34323C',
        }),
      }}
    />
  );
};

export default ReactSelect;