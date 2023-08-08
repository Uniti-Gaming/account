import { FormEvent } from 'react';

import styles from './PopupWithForm.module.scss';

import Button from '../Button/Button';
import LayoutBlock from '../LayoutBlock/LayoutBlock';
import Popup from '../Popup/Popup';

interface PopupWithFormProps {
    children: JSX.Element | JSX.Element[]
    title: string
    isOpen: boolean
    handleClose: () => void
    handleSubmit: (evt: FormEvent<HTMLFormElement>) => void
}

const PopupWithForm = ({ title, children, isOpen, handleClose, handleSubmit }: PopupWithFormProps) => {
  return (
    <Popup isOpen={isOpen} handleClose={handleClose}>
      <LayoutBlock title={title}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {children}
          <div className={styles.buttons}>
            <Button text='Сохранить' />
            <Button
              text='Отмена'
              type='button'
              handleClick={handleClose} />
          </div>
        </form>
      </LayoutBlock>
    </Popup>
  );
};

export default PopupWithForm;