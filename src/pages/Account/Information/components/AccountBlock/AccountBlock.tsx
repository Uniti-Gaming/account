import { FC } from 'react';

import Clipboard from '../Clipboard/Clipboard';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';
import AccountPopup from '../AccountPopup/AccountPopup';

import styles from './AccountBlock.module.scss';

interface AccountProps {
  id: string
  code: string
}
const AccountBlock: FC<AccountProps> = ({ id, code }) => {
  return (
    <BlockWidthPopup
      title='ИНФОРМАЦИЯ АККАУНТА'
      button={{ text: 'Зачем мне это?' }}
      Popup={AccountPopup}
    >
      <table className={styles.table}>
        <tbody>
          <Clipboard value={id} label='Мой ID' />
          <Clipboard value={code} label='Реферальный код' />
        </tbody>
      </table>
    </BlockWidthPopup>
  );
};

export default AccountBlock;