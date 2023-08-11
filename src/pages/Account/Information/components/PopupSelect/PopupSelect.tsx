import { FC } from 'react';

import { SelectProps } from '@/core/interfaces/selectProps';

import ReactSelect from '@/components/ReactSelect/ReactSelect';

const containerStyles = {
  width: '398px',
  height: '48px',
};

const controlStyles = {
  height: '48px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

const PopupSelect: FC<SelectProps> = (props) => {
  return (
    <ReactSelect
      {...props}
      placeholder='Выберите из списка'
      containerStyles={containerStyles}
      controlStyles={controlStyles}
    />
  );
};

export default PopupSelect;