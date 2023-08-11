import { useRef, useState, MouseEvent } from 'react';

import { useForm } from '@/core/hooks/useForm';
import { optionsCity } from '@/assets/data/options';
import styles from './SignUp.module.scss';
import infoIcon from '@images/info.svg';

import Checkbox from '@/components/Checkbox/Checkbox';
import MainAuth from '../components/MainAuth/MainAuth';
import AuthForm from '../components/AuthForm/AuthForm';
import AuthLabel from '../components/AuthLabel/AuthLabel';
import AuthInput from '../components/AuthInput/AuthInput';
import AuthSelect from '../components/AuthSelect/AuthSelect';
import InputButton from '../components/InputButton/InputButton';
import InfoToolTip from '../components/InfoToolTip/InfoToolTip';

const mainUrl = import.meta.env.VITE_MAIN_URL;

const defaultValues = {

};

const SignUp = () => {
  const agreeRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState({
    email: false,
    ref: false,
  });
  const { values, handleChange, setValues } = useForm(defaultValues);

  const toggleShowInfo = (evt: MouseEvent, name: 'email' | 'ref') => {
    evt.stopPropagation();
    setShowInfo({
      ...showInfo,
      [name]: !showInfo[name],
    });
  };

  const onSubmit = () => {
    setLoading(true);
    console.log(agreeRef.current?.checked);
  };

  return (
    <MainAuth
      link='/signin'
      text={{
        title: 'Зарегистрироваться в Unite-Gaming',
        footnote: 'Уже есть учётная запись?',
        link: 'Войти',
      }}>
      <AuthForm loading={isLoading} handleSubmit={onSubmit} button='Войти в систему'>
        <AuthLabel text='Имя' required>
          <AuthInput
            type='text'
            name='name'
            value={values.name || ''}
            onChange={handleChange}
            placeholder='Введите имя'
          />
        </AuthLabel>
        <AuthLabel text='Пароль' required>
          <AuthInput
            type='password'
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            placeholder='Введите пароль'
          />
        </AuthLabel>
        <AuthLabel text='Подтвердить пароль' required>
          <AuthInput
            type='password'
            name='password2'
            value={values.password2 || ''}
            onChange={handleChange}
            placeholder='Введите пароль'
          />
        </AuthLabel>
        <AuthLabel text='Номер телефона' required>
          <AuthInput
            type='phone'
            name='phone'
            value={values.phone || ''}
            onChange={handleChange}
            placeholder='Введите номер телефона'
          />
        </AuthLabel>
        <AuthLabel text='E-mail' required>
          <AuthInput
            type='email'
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='Введите адрес электронной почты'
          />
          <InputButton handleClick={(evt) => toggleShowInfo(evt, 'email')}>
            <img src={infoIcon} alt='Информация' />
          </InputButton>
          <InfoToolTip isOpen={showInfo.email} onClose={() => setShowInfo({ ...showInfo, email: false })}>
            Вы можете узнать адрес своей электронной почты в приложении Google Play или App Store.
          </InfoToolTip>
        </AuthLabel>
        <AuthLabel text='Дата рождения' required>
          <div className={styles.date}>
            <AuthSelect
              options={optionsCity}
              values={values}
              name='day'
              setValues={setValues}
              placeholder='День'
            />
            <AuthSelect
              options={optionsCity}
              values={values}
              name='month'
              setValues={setValues}
              placeholder='Месяц'
            />
            <AuthSelect
              options={optionsCity}
              values={values}
              name='year'
              setValues={setValues}
              placeholder='Год'
            />
          </div>
        </AuthLabel>
        <AuthLabel text='Город' required>
          <AuthSelect
            options={optionsCity}
            values={values}
            name='city'
            setValues={setValues}
            placeholder='Выберите из списка'
          />
        </AuthLabel>
        <AuthLabel text='Как вы о нас узнали' required>
          <AuthSelect
            options={optionsCity}
            values={values}
            name='how'
            setValues={setValues}
            placeholder='Выберите из списка'
          />
        </AuthLabel>
        <AuthLabel text='Реферальный код'>
          <AuthInput
            type='text'
            name='ref'
            value={values.ref || ''}
            onChange={handleChange}
            placeholder='Введите код приглашения'
          />
          <InputButton handleClick={(evt) => toggleShowInfo(evt, 'ref')}>
            <img src={infoIcon} alt='Информация' />
          </InputButton>
          <InfoToolTip isOpen={showInfo.ref} onClose={() => setShowInfo({ ...showInfo, ref: false })}>
            Введите код приглашения, если он у вас есть. Это даст вам бонусы. 
          </InfoToolTip>
        </AuthLabel>
        <div className={styles.checkboxWraper}>
          <Checkbox chekboxRef={agreeRef}>
            <p className={styles.checkboxText}>
              Я согласен с
              <a className={styles.checkboxLink} href={`${mainUrl}/privacy-policy`}>политикой конфиденциальности</a>
              и
              <a className={styles.checkboxLink} href={`${mainUrl}/terms`}>условиями использования сайта</a>
            </p>
          </Checkbox>
        </div>
      </AuthForm>
    </MainAuth>
  );
};

export default SignUp;