import styles from './PromoCode.module.scss';

import Button from '@/components/Button/Button';
import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';

const PromoCode = () => {
  return (
    <LayoutBlock title='использовать код'>
      <form className={styles.form}>
        <input placeholder='XXXX-XXXX-XXXX' className={styles.input} />
        <Button
          type='submit'
          text='Использовать'
          style={{padding: '17px 24px', fontSize: '18px'}}
        />
      </form>
    </LayoutBlock>
  );
};

export default PromoCode;