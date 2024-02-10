import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';
import PrivateInfoPopup from '../PrivateInfoPopup/PrivateInfoPopup';

import styles from './PrivateInfo.module.scss';

interface PrivateInfoProps {
  name: string
  city: string
}

const PrivateInfo = ({ name, city }: PrivateInfoProps) => {
  return (
    <BlockWidthPopup
      title='ЛИЧНАЯ ИНФОРМАЦИЯ'
      button={{ text: 'Обновить', edit: true }}
      Popup={PrivateInfoPopup}
    >
      <table className={styles.table}>
        <tbody>
          <FieldValuePair value={name} label='Имя' underline />
          <FieldValuePair value={city} label='Город' />
        </tbody>
      </table>
    </BlockWidthPopup>
  );
};

export default PrivateInfo;