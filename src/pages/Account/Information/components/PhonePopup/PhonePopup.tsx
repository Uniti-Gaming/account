import { FC, useContext, useState } from 'react';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { PopupProps } from '@/core/interfaces/PopupProps';
import { editNumber } from '@/core/services/userService';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const PhonePopup: FC<PopupProps> = (props) => {
  const { currentUser, login } = useContext(VerifiedUserContext);
  const [value, setValue] = useState(currentUser.number);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    editNumber(value)
      .then(() => {
        login({ ...currentUser, number: value });
        props.handleClose();
      })
      .finally(() => setLoading(false));
  };
  
  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} loading={loading} >
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