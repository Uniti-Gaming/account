import { FC, useContext } from 'react';

import { TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import styles from './TariffPopup.module.scss';

import Popup from '@/components/Popup/Popup';
import Button from '@/components/Button/Button';
import { options } from './data';


const TariffPopup: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { openPopup, popup } = useContext(TariffPopupContext);

  const closePopup = () => {
    openPopup(null);
  };

  return (
    <Popup isOpen={!!popup} handleClose={closePopup}>
      <div className={styles.container}>
        {popup && (
          <>
            {popup.type === 'buy' ? (
              <>
                <div className={styles.buy}>
                  <h2 className={styles.title}>{popup.title}</h2>
                  <img
                    className={styles.image}
                    src={popup.image}
                    alt={popup.title}
                  />
                </div>
                {popup.output && (
                  <div className={styles.output} >
                    <p className={styles.label}>Тариф</p>
                    <p className={styles.value}>: {popup.output.name}</p>
                    <p className={styles.label}>Тип</p>
                    <p className={styles.value}>: {popup.output.period}</p>
                    <p className={styles.label}>Дата окончания</p>
                    <p className={styles.value}>: {popup.output.time}</p>
                    <p className={styles.label}>Итого</p>
                    <p className={styles.value}>: {popup.output.total} TMT</p>
                  </div>
                )}
              </>
            ) : (
              <>
                <img
                  className={styles.image}
                  src={popup.image}
                  alt={popup.title}
                  style={{ width: popup.type === 'tariff' ? '120px' : '58px' }}
                />
                <h2 className={styles.title}>{popup.title}</h2>
                {popup.text?.map((paragraph, index) => (
                  <p key={index} className={styles.text}>{paragraph}</p>
                ))}
                {popup.type === 'tariff' && (
                  <ul className={styles.list}>
                    {options.map((option, index) => (
                      <li className={styles.option} key={index}>
                        <img src={option.image} alt={option.text.ru} />
                        <p>
                          {(option.value === 'tickets' || option.value === 'coins')
                          && popup.opportunities && `${popup.opportunities[option.value]} `}
                          {option.text.ru}
                        </p>
                        {popup.opportunities && popup.opportunities[option.value] ? (
                          <span className={styles.apruved} />
                        ) : (
                          <span className={styles.notApruved} />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
            <div className={styles.buttons}>
              <Button
                handleClick={closePopup}
                text={popup.buttons.grey.text}
                style={{ fontSize: '12px', backgroundColor: '#484652', width: '100%' }}
              />
              <Button
                handleClick={popup.buttons.primary.onClick}
                text={popup.buttons.primary.text}
                style={{ fontSize: '12px', width: '100%' }}
                loading={isLoading}
              />
            </div>
          </>
        )}
      </div>
    </Popup>
  );
};

export default TariffPopup;