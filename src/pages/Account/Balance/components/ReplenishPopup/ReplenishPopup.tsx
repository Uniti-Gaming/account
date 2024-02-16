import { FC } from 'react';

import { useForm } from '@/core/hooks/useForm';
import { optionsReplenish } from '@/assets/data/options';
import { PopupProps } from '@/core/interfaces/PopupProps';

import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupSelect from '@/components/PopupSelect/PopupSelect';
import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';
import { useNavigate } from 'react-router-dom';

const ReplenishPopup: FC<PopupProps> = ({ isOpen, title, handleClose }) => {
  const navigate = useNavigate();
  const { values, setValues } = useForm({
    replenish: optionsReplenish[0].value,
  });

  return (
    <PopupWithForm
      title={title}
      submitText='Подтвердить'
      handleSubmit={() => {
        if(values.replenish === 'Подарочная карта') {
          navigate('/use-code');
        }
      }}
      handleClose={handleClose}
      isOpen={isOpen}
    >
      <LabelForPopupInput name='Выберите способ пополнения'>
        <PopupSelect
          options={optionsReplenish}
          values={values}
          name='replenish'
          setValues={setValues} />
      </LabelForPopupInput>
    </PopupWithForm>
  );
};

export default ReplenishPopup;