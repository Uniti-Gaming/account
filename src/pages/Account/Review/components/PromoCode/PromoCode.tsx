import InputMask from 'react-input-mask';

import styles from './PromoCode.module.scss';

import Button from '@/components/Button/Button';
import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import { FC, useState } from 'react';

interface PromoCodeProps {
  handleSubmit: (value: string) => void;
  isLoading: boolean;
}

const PromoCode: FC<PromoCodeProps> = ({ handleSubmit, isLoading }) => {
  const [value, setValue] = useState<string>('');
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  return (
    <LayoutBlock title='использовать код'>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputMask
          className={styles.input}
          mask={'****-****-****'}
          placeholder='XXXX-XXXX-XXXX'
          maskPlaceholder={null}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          type='submit'
          text='Использовать'
          loading={isLoading}
          className={styles.button}
        />
      </form>
    </LayoutBlock>
  );
};

export default PromoCode;