import { FC } from 'react';

import { SelectProps } from '@/core/interfaces/selectProps';

import ReactSelect from '@/components/ReactSelect/ReactSelect';

const containerStyles = {
  width: '100%',
  marginTop: '8px',
};

const controlStyles = {
  height: '60px',
  backgroundColor: '#34323C',
};

interface AuthSelectProps extends SelectProps {
    placeholder: string;
}

const AuthSelect: FC<AuthSelectProps> = (props) => {
  return (
    <ReactSelect {...props} containerStyles={containerStyles} controlStyles={controlStyles} />
  );
};

export default AuthSelect;