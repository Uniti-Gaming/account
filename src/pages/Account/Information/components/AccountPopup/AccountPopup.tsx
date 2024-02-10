import { FC } from 'react';

import { PopupProps } from '@interfaces/PopupProps';
import styles from './AccountPopup.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Popup from '@/components/Popup/Popup';
import Button from '@/components/Button/Button';

const AccountPopup: FC<PopupProps> = ({ isOpen, handleClose, title }) => {

  return (
    <Popup isOpen={isOpen} handleClose={handleClose}>
      <LayoutBlock title={title}>
        <div className={styles.content}>
          <div className={styles.pair}>
            <h4 className={styles.label}>Мой ID</h4>
            <p className={styles.about}>
              С вашим уникальным ID команда Unite Gaming сможет оперативно помочь
              вам с решением возникающих проблем.
            </p>
          </div>
          <div className={styles.pair}>
            <h4 className={styles.label}>Реферальный код</h4>
            <p className={styles.about}>
              Приглашайте друзей по реферальному коду -
              обе стороны получат бонусы!
            </p>
          </div>
          <Button
            text='Ок'
            handleClick={handleClose}
            className={styles.button}
            style={{ margin: '39px auto 0', display: 'block' }}
          />
        </div>
      </LayoutBlock>
    </Popup>
  );
};

export default AccountPopup;