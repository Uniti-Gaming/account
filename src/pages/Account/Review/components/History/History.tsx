import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import styles from './History.module.scss';

const History = () => {
  return (
    <LayoutBlock
      title='недавние покупки'
      link={{
        path: '/account/history',
        text: 'История платежей >',
      }}>
      <div className={styles.body}>
        <div className={styles.transaction}>
          <p className={styles.text}>5 янв. 2023 г.</p>
          <p className={styles.text}>Покупка Тарифного плана “Герой”</p>
          <p className={styles.text}>140 TMT</p>
          <p className={styles.text}>Выполнено</p>
        </div>
      </div>
    </LayoutBlock>
  );
};

export default History;