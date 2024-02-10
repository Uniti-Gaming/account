import { FC } from 'react';

import { PopupProps } from '@/core/interfaces/PopupProps';
import styles from './BlockWithOneString.module.scss';

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
      <table className={styles.table}>
        <tbody>
          <FieldValuePair {...{value, label}} />
        </tbody>
      </table>
    </BlockWidthPopup>
  );
};

export default BlockWithOneString;