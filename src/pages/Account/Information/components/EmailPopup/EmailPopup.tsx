import { FC, useContext, useState } from 'react';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { PopupProps } from '@/core/interfaces/PopupProps';
import { editEmail } from '@/core/services/userService';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const EmailPopup: FC<PopupProps> = (props) => {
  const { currentUser, login } = useContext(VerifiedUserContext);
  const [value, setValue] = useState(currentUser.email);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    editEmail(value)
      .then(() => {
        login({ ...currentUser, email: value });
        props.handleClose();
      })
      .finally(() => setLoading(false));
  };
  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} loading={loading}>
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