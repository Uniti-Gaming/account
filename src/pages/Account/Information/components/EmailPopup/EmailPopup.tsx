import { FC, useContext, useState } from 'react';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { PopupProps } from '@/core/interfaces/PopupProps';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const EmailPopup: FC<PopupProps> = (props) => {
  const verifiedUser = useContext(VerifiedUserContext);
  const [value, setValue] = useState(verifiedUser.email);
  const handleSubmit = () => { };
  
  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
      <LabelForPopupInput name='Электронная почта'>
        <PopupInput
          type='email'
          name='email'
          placeholder='Введите адрес электронной почты'
          value={value}
          handleChange={e => setValue(e.target.value)}
        />
      </LabelForPopupInput>
    </PopupEditInfo>
  );
};

export default EmailPopup;