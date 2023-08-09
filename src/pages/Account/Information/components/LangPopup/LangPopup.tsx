import { FC, useContext, useState } from 'react';

import { AuthContext } from '@/core/contexts/AuthContext';
import { PopupProps } from '@/core/interfaces/PopupProps';
import { optionsLanguage } from '@/assets/data/options';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';
import PopupSelect from '@/components/PopupSelect/PopupSelect';

const LangPopup: FC<PopupProps> = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState<{[key: string]: string }>({ lang: currentUser.lang });
  const handleSubmit = () => { };

  return (
    <PopupEditInfo handleSubmit={handleSubmit} {...props} >
      <LabelForPopupInput name='Предпочитаемый язык переписки'>
        <PopupSelect
          options={optionsLanguage}
          values={value}
          name='lang'
          setValues={setValue}
        />
      </LabelForPopupInput>
    </PopupEditInfo>
  );
};

export default LangPopup;