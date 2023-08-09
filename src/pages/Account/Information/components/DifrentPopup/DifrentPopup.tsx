import { FC, useContext } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';
import { useForm } from '@hooks/useForm';
import { PopupProps } from '@interfaces/PopupProps';
import { optionsFavorite, optionsSex } from '@/assets/data/options';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupSelect from '@/components/PopupSelect/PopupSelect';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const DifrentPopup: FC<PopupProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { values, handleChange, setValues } = useForm({...currentUser.difrent});
  const handleSubmit = () => {};

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
      <>
        <LabelForPopupInput name='Мой пол'>
          <PopupSelect
            options={optionsSex}
            values={values}
            name='sex'
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
            name='favorite'
            setValues={setValues} />
        </LabelForPopupInput>
      </>
    </PopupEditInfo>
  );
};

export default DifrentPopup;