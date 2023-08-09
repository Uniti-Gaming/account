import { FC } from 'react';

import Clipboard from '../Clipboard/Clipboard';
import BlockWidthPopup from '../BlockWidthPopup/BlockWidthPopup';
import AccountPopup from '../AccountPopup/AccountPopup';

interface AccountProps {
  id: string
  code: string
}
const AccountBlock: FC<AccountProps> = ({  id, code }) => {
  return (
    <BlockWidthPopup
      title='ИНФОРМАЦИЯ АККАУНТА'
      button={{text: 'Зачем мне это?'}}
      Popup={AccountPopup}
    >
      <div style={{ padding: '31px 0 23px' }}>
        <Clipboard value={id} label='Мой ID' />
        <Clipboard value={code} label='Реферальный код' />
      </div>
    </BlockWidthPopup>
  );
};

export default AccountBlock;