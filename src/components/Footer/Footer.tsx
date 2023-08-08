import { menulinks } from '@/core/utils/menuLinks';
import styles from './Footer.module.scss';
import starIcon from '@images/social-icons/star.svg';
import instagramIcon from '@images/social-icons/instagram.svg';
import tikTokIcon from '@images/social-icons/tiktok.svg';
import logo from '@images/logo.svg';

import FooterSubMenu from './FooterSubMenu';

const mainUrl = import.meta.env.VITE_MAIN_URL;

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <ul className={styles.menu}>
        <FooterSubMenu menulinks={menulinks.main} mainLink='Главная' />
        <FooterSubMenu menulinks={menulinks.ourProducts} mainLink='Наши продукты' />
        <FooterSubMenu menulinks={menulinks.games} mainLink='Игры' />
        <FooterSubMenu menulinks={menulinks.about} mainLink='О компании' />
      </ul>
      <div className={styles.under}>
        <a href={mainUrl}>
          <img src={logo} className={styles.logo} alt='логотип' />
        </a>
        <ul className={styles.underlinks}>
          <li>
            <a
              className={styles.underlink}
              href='https://unite-gaming.com/index.php/terms/'
            >
                Правила пользования
            </a>
          </li>
          <li>
            <a className={styles.underlink} href='/'>Политика конфиденциальности</a>
          </li>
          <li>
            <a className={styles.underlink} href='/'>Контакты</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href='https://www.tiktok.com/@unite_gaming'>
            <img src={tikTokIcon} alt='TikTok Unite' />
          </a>
          <a href='https://www.instagram.com/unite.gaming_tm/'>
            <img src={instagramIcon} alt='Instagram Unite' />
          </a>
          <a href='https://icq.im/UniteGaming'>
            <img src={starIcon} alt='ISQ Unite' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;