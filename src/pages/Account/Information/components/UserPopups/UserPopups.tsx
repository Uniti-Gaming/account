import { useEffect, useState, FormEvent } from 'react';

import { useForm } from '@hooks/useForm';
import { optionsLanguage, optionsCity, optionsSex, optionsFavorite } from '@/assets/data/options';
import { IUser } from '@interfaces/userInterface';

import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';
import LabelForPopupInput from '@/components/LabelForPopupInput/LabelForPopupInput';
import PopupInput from '@/components/PopupInput/PopupInput';
import PopupSelect from '@/components/PopupSelect/PopupSelect';

interface UserPopupsProps {
    close: () => void
    popupIsOpen: {
        [key: string]: boolean
    }
    currentUser: IUser
}

const UserPopups = ({ close, popupIsOpen, currentUser }: UserPopupsProps) => {

  const [title, seTitle] = useState<string>('');
  const { values, handleChange, setValues } = useForm({
    name: currentUser.name,
    city: currentUser.city,
    email: currentUser.email,
    phone: currentUser.phone,
    lang: currentUser.lang,
    sex: currentUser.difrent.sex,
    tiktok: currentUser.difrent.tiktok,
    instagram: currentUser.difrent.instagram,
    favorite: currentUser.difrent.favorite,
  });
  useEffect(() => {
    if (popupIsOpen.email) {
      seTitle('Электронная почта');
    }
    if (popupIsOpen.phone) {
      seTitle('Номер телефона');
    }
    if (popupIsOpen.lang) {
      seTitle('РАССЫЛКА от Unite gaming');
    }
    if (popupIsOpen.private) {
      seTitle('Личная информация');
    }
    if (popupIsOpen.difrent) {
      seTitle('Дополнительные поля');
    }
  }, [popupIsOpen]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    close();
  };

  return (
    <PopupWithForm
      isOpen={
        popupIsOpen.email ||
        popupIsOpen.phone ||
        popupIsOpen.lang ||
        popupIsOpen.private ||
        popupIsOpen.difrent}
      handleClose={close}
      title={title}
      handleSubmit={handleSubmit} >
      <>
        {popupIsOpen.private && (
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
        )}
        {popupIsOpen.email && (
          <LabelForPopupInput name='Электронная почта'>
            <PopupInput
              type='email'
              name='email'
              placeholder='Введите адрес электронной почты'
              value={values.email}
              handleChange={handleChange} />
          </LabelForPopupInput>
        )}
        {popupIsOpen.phone && (
          <LabelForPopupInput name='Номер телефона'>
            <PopupInput
              type='phone'
              name='phone'
              placeholder='Введите номер телефона'
              value={values.phone}
              handleChange={handleChange} />
          </LabelForPopupInput>
        )}
        {popupIsOpen.lang && (
          <LabelForPopupInput name='Предпочитаемый язык переписки'>
            <PopupSelect
              options={optionsLanguage}
              values={values}
              name='lang'
              setValues={setValues} />
          </LabelForPopupInput>
        )}
        {popupIsOpen.difrent && (
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
        )}
      </>
    </PopupWithForm>
  );
};

export default UserPopups;