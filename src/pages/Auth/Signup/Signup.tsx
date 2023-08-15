import { useRef, useState, MouseEvent } from 'react';

import { useFormWithValidation } from '@hooks/useFormWithValidation';
import { optionsCity, optionsvisitFrom } from '@/assets/data/options';
import { signup } from '@services/authService';
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
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import PasswordInput from '../components/PasswordInput/PasswordInput';
import AuthInputWithMask from '../components/AuthInput/AuthInputWithMask';
import DateOfBirthSelects from '../components/DateOfBirthSelects/DateOfBirthSelects';

const mainUrl = import.meta.env.VITE_MAIN_URL;
const initialState = {
  name: '',
  email: '',
  number: '',
  password: '',
  confirmPassword: '',
  day: '',
  month: '',
  year: '',
  city: '',
  visitFrom: '',
  checkbox: '',
};

const SignUp = () => {
  const agreeRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState({ email: false, ref: false });
  const { values, handleChange, errors, setValues, setErrors } = useFormWithValidation(initialState);

  const toggleShowInfo = (evt: MouseEvent, name: 'email' | 'ref') => {
    evt.stopPropagation();
    setShowInfo({
      ...showInfo,
      [name]: !showInfo[name],
    });
  };

  const handleCheckbox = (evt: MouseEvent) => {
    if (evt.target && 'checked' in evt.target) {
      setValues({ ...values, checkbox: evt.target.checked as string });
    }
  };

  const onSubmit = async (evt: React.FormEvent) => {
    const form = evt.target as HTMLFormElement;
    if (form.checkValidity() && values.password === values.confirmPassword) {
      setLoading(true);
      console.log(values);
      signup({
        name: values.name,
        email: values.email,
        number: values.number.replace(/[^\d+]/g, ''),
        password: values.password,
        birthday: `${values.day}-${values.month}-${values.year}`,
        city: values.city,
        visit_from: values.visitFrom,
        friend_ref: values.friendRef,
        privacy_policy: true,
        terms_of_use: true,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          if (err.errors) {
            setErrors(err.errors);
          }
        })
        .finally(() => setLoading(false));
    } else {
      const newErrors: { [key: string]: string } = {};
      if(values.password !== values.confirmPassword) {
        newErrors.confirmPassword = 'Пароли не совпадают';
      }
      Object.keys(values).forEach(key => {
        if (values[key] === '') {
          newErrors[key] = 'Обязательное поле';
        }
      });
      await setErrors({...errors, ...newErrors});

      const elementPosition = document.getElementById('error')?.getBoundingClientRect().top;
      if (elementPosition) {
        window.scrollBy({
          top: elementPosition - 200,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <MainAuth
      link='/signin'
      text={{
        title: 'Зарегистрироваться в Unite-Gaming',
        footnote: 'Уже есть учётная запись?',
        link: 'Войти',
      }}>
      <AuthForm
        loading={isLoading}
        handleSubmit={onSubmit}
        button='Войти в систему'
        disabled={agreeRef.current?.checked ? false : true}
      >
        <AuthLabel text='Имя' required>
          <AuthInput
            type='text'
            name='name'
            pattern='[A-Za-z]+'
            value={values.name || ''}
            onChange={handleChange}
            placeholder='Введите имя'
            maxLength={30}
            minLength={2}
            error={!!errors.name}
            required
          />
          <>
            {errors.name && (<ErrorMessage message={errors.name} />)}
          </>
        </AuthLabel>
        <AuthLabel text='Пароль' required>
          <PasswordInput
            onChange={handleChange}
            name='password'
            placeholder='Введите пароль'
            value={values.password || ''}
            error={!!errors.password}
          />
          <>
            {errors.password && (<ErrorMessage message={errors.password} />)}
          </>
        </AuthLabel>
        <AuthLabel text='Подтвердить пароль' required>
          <PasswordInput
            name='confirmPassword'
            value={values.confirmPassword || ''}
            onChange={handleChange}
            placeholder='Повторите пароль'
            error={!!errors.confirmPassword}
          />
          <>
            {errors.confirmPassword && (<ErrorMessage message={errors.confirmPassword} />)}
          </>
        </AuthLabel>
        <AuthLabel text='Номер телефона' required>
          <AuthInputWithMask
            type='tel'
            name='number'
            mask={'+\\9\\93(99)99-99-99'}
            value={values.number || ''}
            onChange={handleChange}
            placeholder='Введите номер телефона'
            error={!!errors.number}
            required
          />
          <ErrorMessage message={errors.number} />
        </AuthLabel>
        <AuthLabel text='E-mail' required>
          <AuthInput
            type='email'
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            placeholder='Введите адрес электронной почты'
            error={!!errors.email}
            required
          />
          <ErrorMessage message={errors.email} />
          <InputButton handleClick={(evt) => toggleShowInfo(evt, 'email')}>
            <img src={infoIcon} alt='Информация' />
          </InputButton>
          <InfoToolTip isOpen={showInfo.email} onClose={() => setShowInfo({ ...showInfo, email: false })}>
            Вы можете узнать адрес своей электронной почты в приложении Google Play или App Store.
          </InfoToolTip>
        </AuthLabel>
        <DateOfBirthSelects values={values} setValues={setValues} errors={errors} setErrors={setErrors} />
        <AuthLabel text='Город' required>
          <AuthSelect
            options={optionsCity}
            values={values}
            name='city'
            setValues={setValues}
            placeholder='Выберите из списка'
            error={!!errors.city}
            setErrors={setErrors}
            errors={errors}
          />
          <>
            {errors.city && (<ErrorMessage message='Обязательное поле' />)}
          </>
        </AuthLabel>
        <AuthLabel text='Как вы о нас узнали' required>
          <AuthSelect
            options={optionsvisitFrom}
            values={values}
            name='visitFrom'
            setValues={setValues}
            placeholder='Выберите из списка'
            error={!!errors.visitFrom}
            setErrors={setErrors}
            errors={errors}
          />
          <>
            {errors.visitFrom && (<ErrorMessage message='Обязательное поле' />)}
          </>
        </AuthLabel>
        <AuthLabel text='Реферальный код'>
          <AuthInputWithMask
            type='text'
            name='friendRef'
            value={values.friendRef || ''}
            onChange={handleChange}
            placeholder='Введите код приглашения'
            error={!!errors.friendRef}
            mask='****-****-****'
          />
          <>
            {errors.friendRef && (<ErrorMessage message='Неверный реферальный код' />)}
          </>
          <InputButton handleClick={(evt) => toggleShowInfo(evt, 'ref')}>
            <img src={infoIcon} alt='Информация' />
          </InputButton>
          <InfoToolTip isOpen={showInfo.ref} onClose={() => setShowInfo({ ...showInfo, ref: false })}>
            Введите код приглашения, если он у вас есть. Это даст вам бонусы.
          </InfoToolTip>
        </AuthLabel>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            chekboxRef={agreeRef}
            onClick={handleCheckbox}
            required
          >
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