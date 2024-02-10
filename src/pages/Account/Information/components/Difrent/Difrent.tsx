import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import DifrentPopup from '../DifrentPopup/DifrentPopup';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';


import styles from './Difrent.module.scss';

interface DifrentProps {
  sex: string
  instagram: string
  tiktok: string
  favorite: string
}

const Difrent = ({ sex, instagram, tiktok, favorite }: DifrentProps) => {
  return (
    <BlockWidthPopup
      title='ДОПОЛНИТЕЛЬНЫЕ ПОЛЯ'
      button={{ text: 'Обновить', edit: true }}
      Popup={DifrentPopup}
    >
      <table className={styles.table}>
        <tbody>
          <FieldValuePair
            value={sex}
            label='Мой пол' />
          <FieldValuePair
            value={instagram}
            label='Аккаунт в Instagram' />
          <FieldValuePair
            value={tiktok}
            label='Аккаунт в Tik-Tok' />
          <FieldValuePair
            value={favorite}
            label='Любимый сервис в Unite Gaming' />
        </tbody>
      </table>
    </BlockWidthPopup>
  );
};

export default Difrent;