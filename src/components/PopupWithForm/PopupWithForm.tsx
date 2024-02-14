import { FC, FormEvent } from 'react';

import { PopupProps } from '@interfaces/PopupProps';
import styles from './PopupWithForm.module.scss';

import Button from '../Button/Button';
import LayoutBlock from '../LayoutBlock/LayoutBlock';
import Popup from '../Popup/Popup';

interface PopupWithFormProps extends PopupProps {
  children: JSX.Element | JSX.Element[]
  handleSubmit: () => void
  submitText?: string
  loading?: boolean
}

const PopupWithForm: FC<PopupWithFormProps> = ({
  submitText = 'Сохранить',
  title,
  children,
  isOpen,
  handleClose,
  handleSubmit,
  loading,
}) => {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit();
  };
  return (
    <Popup isOpen={isOpen} handleClose={handleClose}>
      <LayoutBlock title={title}>
        <form className={styles.form} onSubmit={onSubmit}>
          {children}
          <div className={styles.buttons}>
            <Button
              type='submit'
              text={submitText}
              className={styles.submit}
              loading={loading}
            />
            <Button
              text='Отмена'
              type='button'
              className={styles.buttonGray}
              handleClick={handleClose}
            />
          </div>
        </form>
      </LayoutBlock>
    </Popup>
  );
};

export default PopupWithForm;