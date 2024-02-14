import { FC, useContext, useState } from 'react';

import { useForm } from '@hooks/useForm';
import { PopupProps } from '@interfaces/PopupProps';
import { optionsFavorite, optionsSex } from '@/assets/data/options';
import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupSelect from '../../../../../components/PopupSelect/PopupSelect';
import PopupEditInfo from '../../../../../components/PopupWithForm/PopupWithForm';
import { editAdditionalInformation } from '@/core/services/userService';

const DifrentPopup: FC<PopupProps> = (props) => {
  const { currentUser, login } = useContext(VerifiedUserContext);
  const [loading, setLoading] = useState(false);
  const { values, handleChange, setValues } = useForm({
    gender: currentUser.gender,
    instagram: currentUser.instagram,
    tiktok: currentUser.tiktok,
    love_service: currentUser.love_service,
  });
  const handleSubmit = () => {
    setLoading(true);
    editAdditionalInformation(values)
      .then(() => {
        login({ ...currentUser, ...values });
        props.handleClose();
      })
      .finally(() => setLoading(false));
  };

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} loading={loading} >
      <>
        <LabelForPopupInput name='Мой пол'>
          <PopupSelect
            options={optionsSex}
            values={values}
            name='gender'
            setValues={setValues} />
        </LabelForPopupInput>
        <LabelForPopupInput name='Аккаунт в Instagram'>
          <PopupInput
            type='text'
            name='instagram'
            placeholder='Введите аккаунт в Instagram'
            value={values.instagram}
            handleChange={handleChange} />
        </LabelForPopupInput>
        <LabelForPopupInput name='Аккаунт в Tik -Tok'>
          <PopupInput
            type='text'
            name='tiktok'
            placeholder='Введите аккаунт в Tik -Tok'
            value={values.tiktok}
            handleChange={handleChange} />
        </LabelForPopupInput>
        <LabelForPopupInput name='Любимый сервис'>
          <PopupSelect
            options={optionsFavorite}
            values={values}
            name='love_service'
            setValues={setValues} />
        </LabelForPopupInput>
      </>
    </PopupEditInfo>
  );
};

export default DifrentPopup;