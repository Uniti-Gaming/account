import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import FieldValuePairWrapperWithUnderLine from
  '@/components/FieldValuePairWrapperWithUnderLine/FieldValuePairWrapperWithUnderLine';

interface PrivateInfoProps {
  handleClick: () => void;
  name: string
  city: string
}

const PrivateInfo = ({ handleClick, name, city }: PrivateInfoProps) => {
  return (
    <LayoutBlock
      title='ЛИЧНАЯ ИНФОРМАЦИЯ'
      button={{ handleClick }} >
      <div style={{ padding: '31px 0 23px' }}>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair value={name} label='Имя' />
        </FieldValuePairWrapperWithUnderLine>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair value={city} label='Город' />
        </FieldValuePairWrapperWithUnderLine>
      </div>
    </LayoutBlock>
  );
};

export default PrivateInfo;