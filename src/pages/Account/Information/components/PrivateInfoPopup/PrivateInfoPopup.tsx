import { FC, useContext, useState } from 'react';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { useForm } from '@hooks/useForm';
import { PopupProps } from '@interfaces/PopupProps';
import { optionsCity } from '@/assets/data/options';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupSelect from '../PopupSelect/PopupSelect';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';
import { editPrivateInformation } from '@/core/services/userService';

const PrivateInfoPopup: FC<PopupProps> = (props) => {
  const { currentUser, login } = useContext(VerifiedUserContext);
  const [loading, setLoading] = useState(false);
  const { values, handleChange, setValues } = useForm({
    name: currentUser.name,
    city: currentUser.city,
  });
  const handleSubmit = () => {
    setLoading(true);
    editPrivateInformation(values)
      .then(() => {
        login({ ...currentUser, ...values });
        props.handleClose();
      })
      .finally(() => setLoading(false));
  };

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} loading={loading} >
      <>
        <LabelForPopupInput name='Имя'>
          <PopupInput
            type='text'
            name='name'
            placeholder='Введите имя'
            value={values.name}
            handleChange={handleChange} />
        </LabelForPopupInput>
        <LabelForPopupInput name='Город'>
          <PopupSelect
            options={optionsCity}
            values={values}
            name='city'
            setValues={setValues} />
        </LabelForPopupInput>
      </>
    </PopupEditInfo>
  );
};

export default PrivateInfoPopup;