import { FC, useContext, useState } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';
import { PopupProps } from '@/core/interfaces/PopupProps';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const PhonePopup: FC<PopupProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState(currentUser.phone);
  const handleSubmit = () => { };
  
  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
      <LabelForPopupInput name='Номер телефона'>
        <PopupInput
          type='phone'
          name='phone'
          placeholder='Введите номер телефона'
          value={value}
          handleChange={e => setValue(e.target.value)}
        />
      </LabelForPopupInput>
    </PopupEditInfo>
  );
};

export default PhonePopup;