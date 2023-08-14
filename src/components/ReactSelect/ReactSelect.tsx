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
  containerStyles, controlStyles, error }) => {
  const handleChange = (selectedOption: SingleValue<IOption>) => {
    if (selectedOption) {
      const newValue = (selectedOption as IOption).value;
      setValues({ ...values, [name]: newValue });
    }
  };

  return (
    <Select
      options={options}
      value={values[name] ? { value: values[name], label: values[name] } : null}
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
          border: state.isFocused ? '1px solid #635790' : '1px solid transparent',
          borderColor: error? '#DE3341': 'transparent',
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