import { FC, useContext, useState } from 'react';
import classNames from 'classnames';

import { TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import styles from './CardKey.module.scss';

import Button from '@/components/Button/Button';

interface CardKeyProps {
  image: string
  title: string
  password: string
  description: string
}

const CardKey: FC<CardKeyProps> = ({ image, title, password, description }) => {
  const { openPopup } = useContext(TariffPopupContext);
  const [showPass, setShowPass] = useState<boolean>(false);
  const openPopupWithDescription = () => {
    openPopup({
      title: title,
      text: description,
    });
  };
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.wrapper}>
        <p className={styles.label}>Пароль:</p>
        <p className={styles.pass}>{showPass ? password : '***********'}</p>
        <button
          className={classNames(styles.show, { [styles.open]: showPass })}
          onClick={() => setShowPass(!showPass)} />
        <button className={styles.edit} />
      </div>
      <Button
        handleClick={openPopupWithDescription}
        text='Подробнее'
        style={{ backgroundColor: '#484652', margin: '43px 0 10px' }}
        small
      />
      <Button text='Скачать' small />
    </div>
  );
};

export default CardKey;