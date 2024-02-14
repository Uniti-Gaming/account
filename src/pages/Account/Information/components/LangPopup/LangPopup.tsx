import { FC, useContext, useState } from 'react';

import { PopupProps } from '@/core/interfaces/PopupProps';
import { optionsLanguage } from '@/assets/data/options';
import { editLang } from '@/core/services/userService';
import { VerifiedUserContext } from '@/core/contexts/VerifiedUserContext';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupEditInfo from '../../../../../components/PopupWithForm/PopupWithForm';
import PopupSelect from '../../../../../components/PopupSelect/PopupSelect';

const LangPopup: FC<PopupProps> = (props) => {
  const { currentUser, login } = useContext(VerifiedUserContext);
  const [value, setValue] = useState<{lang: 'Русский' | 'Turkmenskiy'}>({lang: currentUser.prefer_lang});
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    editLang(value)
      .then(() => {
        login({ ...currentUser, prefer_lang: value.lang });
        props.handleClose();
      })
      .finally(() => setLoading(false));
  };

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} loading={loading} >
      <LabelForPopupInput name='Предпочитаемый язык переписки'>
        <PopupSelect
          options={optionsLanguage}
          values={value}
          name='lang'
          setValues={setValue as (values: {[key: string]: string; }) => void}
        />
      </LabelForPopupInput>
    </PopupEditInfo>
  );
};

export default LangPopup;