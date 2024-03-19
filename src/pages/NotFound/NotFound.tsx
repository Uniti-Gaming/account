import { useNavigate } from 'react-router-dom';
import image from '@images/404.png';
import styles from './NotFound.module.scss';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <img src={image} alt='404' />
        <h1 className={styles.title}>Упс... похоже, этой страницы не существует</h1>
        <p className={styles.subtitle}>
            Несчастные случаи случаются, но не стесняйтесь использовать меню навигации,
            чтобы узнать больше интересных преимуществ, которые могут помочь вам не заблудиться.
        </p>
        <Button
          text='Вернуться на главную'
          handleClick={() => navigate('/')}
        />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;