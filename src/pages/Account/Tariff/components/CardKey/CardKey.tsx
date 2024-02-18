import { FC, useContext, useState } from 'react';
import classNames from 'classnames';

import { TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import styles from './CardKey.module.scss';

import Button from '@/components/Button/Button';

interface CardKeyProps {
  image: string
  title: string
  password: string
  description: string[]
  login: string
}

const CardKey: FC<CardKeyProps> = ({ image, title, password, description, login }) => {
  const { openPopup } = useContext(TariffPopupContext);
  const [showPass, setShowPass] = useState<boolean>(false);
  const openPopupWithDescription = () => {
    openPopup({
      type: 'key',
      title: title,
      text: description,
      image: image,
      buttons: {
        grey: { text: 'Назад' },
        primary: {
          text: 'Скачать',
          onClick: () => {},
        },
      },
    });
  };
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.wrapper}>
        <span className={styles.user} />
        <p className={styles.value}>{login}</p>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.key} />
        <p className={styles.value}>{showPass ? password : '*************'}</p>
        <button
          className={classNames(styles.show, { [styles.open]: showPass })}
          onClick={() => setShowPass(!showPass)} />
      </div>
      <Button
        handleClick={openPopupWithDescription}
        text='Подробнее'
        style={{ backgroundColor: '#484652', margin: '27px 0 10px' }}
        small
      />
      <Button text='Скачать' small />
    </div>
  );
};

export default CardKey;