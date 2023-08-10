import { Link } from 'react-router-dom';

import styles from './MainAuth.module.scss';
import logo from '@images/logo.svg';

interface MainAuthProps {
    children: JSX.Element[] | JSX.Element
    text: {
        title: string
        link?: string
        footnote?: string
    }
    link?: string
}

const MainAuth = ({children, text, link}: MainAuthProps) => {
  return (
    <main className={styles.main}>
      <img src={logo} className={styles.logo} alt='логотип' />
      <h1 className={styles.title}>{text.title}</h1>
      {children}
      {text.footnote && (<p className={styles.footnote}>
        {text.footnote}
        {link && (<Link to={link}>{text.link}</Link>)}
      </p>)}
    </main>
  );
};

export default MainAuth;