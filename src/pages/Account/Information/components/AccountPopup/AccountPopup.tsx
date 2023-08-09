import { FC } from 'react';

import { PopupProps } from '@interfaces/PopupProps';

import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const AccountPopup: FC<PopupProps> = (props) => {
  const handleSubmit = () => {};
  
  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
      <div>AccountPopup</div>
    </PopupEditInfo>
  );
};

export default AccountPopup;