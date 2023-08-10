import { useContext } from 'react';

import { TariffPopupContext } from '@/core/contexts/TariffPopupContext';
import styles from './TariffPopup.module.scss';

import Popup from '@/components/Popup/Popup';
import Button from '@/components/Button/Button';


const TariffPopup = () => {
  const { openPopup, popup } = useContext(TariffPopupContext);

  const closePopup = () => {
    openPopup(null);
  };

  return (
    <Popup isOpen={!!popup} handleClose={closePopup}>
      <>
        {popup && (
          <div className={styles.container}>
            <button className={styles.close} onClick={closePopup} />
            <h2 className={styles.title}>{popup.title}</h2>
            <p className={styles.text}>{popup.text}</p>
            <Button
              handleClick={closePopup}
              text='OK'
              style={{ width: '246px', height: '60px', fontSize: '18px' }}
            />
          </div>
        )}
      </>
    </Popup>
  );
};

export default TariffPopup;