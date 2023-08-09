import { Link } from 'react-router-dom';

import styles from './MainAuth.module.scss';

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
    <div className={styles.main}>
      <h1 className={styles.title}>{text.title}</h1>
      {children}
      {text.footnote && (<p className={styles.footnote}>
        {text.footnote}
        {link && (<Link to={link}>{text.link}</Link>)}
      </p>)}
    </div>
  );
};

export default MainAuth;