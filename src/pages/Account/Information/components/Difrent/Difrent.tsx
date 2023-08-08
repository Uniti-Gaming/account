import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';

interface DifrentProps {
  handleClick: () => void;
  sex: string
  instagram: string
  tiktok: string
  favorite: string
}

const Difrent = ({ handleClick, sex, instagram, tiktok, favorite }: DifrentProps) => {
  return (
    <LayoutBlock
      title='ДОПОЛНИТЕЛЬНЫЕ ПОЛЯ'
      button={{ handleClick }} >
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
    </LayoutBlock>
  );
};

export default Difrent;