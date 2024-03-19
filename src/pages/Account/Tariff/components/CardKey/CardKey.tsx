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
  link: string
}

const CardKey: FC<CardKeyProps> = ({ image, title, password, description, login, link }) => {
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
          onClick: downloadFile,
        },
      },
    });
  };

  const downloadFile = () => {
    fetch(link)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'windows.vpn');
        document.body.appendChild(link);
        link.click();
        if (link.parentNode !== null) {
          link.parentNode.removeChild(link);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
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
      <Button text='Скачать' small handleClick={downloadFile} />
    </div>
  );
};

export default CardKey;
