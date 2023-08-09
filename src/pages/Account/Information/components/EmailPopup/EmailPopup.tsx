import { FC, useContext, useState } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';
import { PopupProps } from '@/core/interfaces/PopupProps';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const EmailPopup: FC<PopupProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState(currentUser.email);
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