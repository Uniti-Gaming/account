import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import DifrentPopup from '../DifrentPopup/DifrentPopup';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';

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
      <div style={{ padding: '54px 0 59px' }}>
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
      </div>
    </BlockWidthPopup>
  );
};

export default Difrent;