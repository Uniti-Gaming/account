import { FC, useState } from 'react';

import { PopupProps } from '@/core/interfaces/PopupProps';
import { optionsLanguage } from '@/assets/data/options';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupEditInfo from '../PopupEditInfo/PopupEditInfo';
import PopupSelect from '../PopupSelect/PopupSelect';

const LangPopup: FC<PopupProps> = (props) => {
  const [value, setValue] = useState<{[key: string]: string }>({});
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