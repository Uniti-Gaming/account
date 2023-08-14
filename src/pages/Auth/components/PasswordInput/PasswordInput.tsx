import { FC, useState } from 'react';

import eye from '@images/eye.svg';
import eyeSlash from '@images/eye-slash.svg';

import AuthInput, { AuthInputProps } from '../AuthInput/AuthInput';
import InputButton from '../InputButton/InputButton';

const PasswordInput: FC<AuthInputProps> = (props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <>
      <AuthInput
        {...props}
        type={showPass ? 'text' : 'password'}
        maxLength={30}
        minLength={6}
        required
      />
      <InputButton handleClick={() => setShowPass(!showPass)}>
        <img src={showPass ? eye : eyeSlash} alt='иконка с глазом' />
      </InputButton>
    </>
  );
};

export default PasswordInput;