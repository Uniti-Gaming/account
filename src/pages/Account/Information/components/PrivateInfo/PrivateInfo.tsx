import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import FieldValuePairWrapperWithUnderLine from
  '@/components/FieldValuePairWrapperWithUnderLine/FieldValuePairWrapperWithUnderLine';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';
import PrivateInfoPopup from '../PrivateInfoPopup/PrivateInfoPopup';

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
      <div style={{ padding: '31px 0 23px' }}>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair value={name} label='Имя' />
        </FieldValuePairWrapperWithUnderLine>
        <FieldValuePairWrapperWithUnderLine>
          <FieldValuePair value={city} label='Город' />
        </FieldValuePairWrapperWithUnderLine>
      </div>
    </BlockWidthPopup>
  );
};

export default PrivateInfo;