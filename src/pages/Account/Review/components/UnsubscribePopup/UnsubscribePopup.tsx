/* eslint-disable no-irregular-whitespace */
import { FC } from 'react';

import { PopupProps } from '@/core/interfaces/PopupProps';
import styles from './UnsubscribePopup.module.scss';

import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Popup from '@/components/Popup/Popup';
import Button from '@/components/Button/Button';


const UnsubscribePopup: FC<PopupProps> = ({ isOpen, handleClose, title }) => {
  return (
    <Popup isOpen={isOpen} handleClose={handleClose}>
      <LayoutBlock title={title}>
        <div className={styles.content}>
          <p className={styles.heading}>
            Вы собираетесь отменить вашу подписку на Unite Gaming.
            Мы хотели бы напомнить вам о нескольких важных деталях перед
            тем, как вы продолжите:
          </p>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.label}>Возврат средств:</th>
                <td className={styles.value}>
                  В соответствии с нашей политикой, мы вернём вам средства за неиспользованные дни текущего
                  платёжного периода.
                </td>
              </tr>
              <tr>
                <th className={styles.label}>Условия отмены:</th>
                <td className={styles.value}>
                  Отменить подписку можно после 15 дней с
                  момента её активации и повторно не чаще чем
                  раз в 15 дней.
                </td>
              </tr>
              <tr>
                <th className={styles.label}>Активация подписки:</th>
                <td className={styles.value}>
                  Если вы решите возобновить подписку в
                  будущем, мы будем рады приветствовать вас
                  снова на платформе Unite Gaming.
                </td>
              </tr>
            </tbody>
          </table>
          <p className={styles.text}>Вы уверены, что хотите отменить подписку?</p>
          <div className={styles.buttons}>
            <Button
              text='Отмена'
              handleClick={handleClose}
              className={styles.cancel}
            />
            <Button
              text='Подтвердить'
              handleClick={handleClose}
              className={styles.submit}
            />
          </div>
        </div>
      </LayoutBlock>
    </Popup>
  );
};

export default UnsubscribePopup;