import { FC } from 'react';

import styles from './AuthForm.module.scss';

import Button from '@/components/Button/Button';

interface AuthFormProps {
    handleSubmit: (event: React.FormEvent) => void
    children: JSX.Element | JSX.Element[]
    button: string
    loading: boolean
    disabled?: boolean
}

const AuthForm: FC<AuthFormProps> = ({ children, handleSubmit, button, loading, disabled }) => {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      {children}
      <Button
        type='submit'
        text={button}
        fullPage={true}
        loading={loading}
        disabled={disabled}
      />
    </form>
  );
};

export default AuthForm;