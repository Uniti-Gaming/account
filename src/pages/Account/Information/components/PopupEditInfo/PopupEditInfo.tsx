import { FC, FormEvent } from 'react';

import { PopupProps } from '@interfaces/PopupProps';
import styles from './PopupEditInfo.module.scss';

import Button from '@/components/Button/Button';
import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Popup from '@/components/Popup/Popup';

interface PopupEditInfoProps extends PopupProps {
    children: JSX.Element | JSX.Element[]
    handleSubmit: () => void
    loading: boolean
}

const PopupEditInfo: FC<PopupEditInfoProps> = ({ title, children, isOpen, handleClose, handleSubmit, loading }) => {
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
            <Button type='submit' text='Сохранить' loading={loading} />
            <Button
              text='Отмена'
              type='button'
              style={{ backgroundColor: '#34323C' }}
              handleClick={handleClose}
            />
          </div>
        </form>
      </LayoutBlock>
    </Popup>
  );
};

export default PopupEditInfo;