import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './LayoutBlock.module.scss';

interface LayoutBlockProps {
    title: string
    link?: {
      path: string
      text: string
    }
    button?: {
      text: string
      edit?: boolean;
      handleClick: () => void;
    }
    children: JSX.Element | JSX.Element[]
}

const LayoutBlock: FC<LayoutBlockProps> = ({title, children, link, button}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {link && (<Link className={styles.link} to={link.path}>{link.text}</Link>)}
        {button && (
          <button
            className={`${styles.button} ${button.edit && styles.edit}`}
            onClick={button.handleClick}
          >
            {button.text}
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default LayoutBlock;