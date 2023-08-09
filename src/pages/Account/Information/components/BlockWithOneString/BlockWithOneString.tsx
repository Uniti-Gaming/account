import { FC } from 'react';

import { PopupProps } from '@/core/interfaces/PopupProps';

import FieldValuePair from '@/components/FieldValuePair/FieldValuePair';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';

interface BlockWithOneStringProps {
  title: string
  value: string
  label: string
  Popup: FC<PopupProps>
}
const BlockWithOneString: FC<BlockWithOneStringProps> = ({ value, label, Popup, title }) => {
  return (
    <BlockWidthPopup
      title={title}
      button={{ text: 'Обновить', edit: true }}
      Popup={Popup}
    >
      <div style={{ padding: '70px 0 64px' }}>
        <FieldValuePair {...{value, label}} />
      </div>
    </BlockWidthPopup>
  );
};

export default BlockWithOneString;