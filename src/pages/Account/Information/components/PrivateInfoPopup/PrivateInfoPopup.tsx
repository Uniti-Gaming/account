import { FC, useContext } from 'react';

import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';
import { useForm } from '@hooks/useForm';
import { PopupProps } from '@interfaces/PopupProps';
import { optionsCity } from '@/assets/data/options';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupSelect from '../PopupSelect/PopupSelect';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';

const PrivateInfoPopup: FC<PopupProps> = (props) => {
  const verifiedUser = useContext(VerifiedUserContext);
  const { values, handleChange, setValues } = useForm({
    name: verifiedUser.name,
    city: '',
  });
  const handleSubmit = () => { };

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
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