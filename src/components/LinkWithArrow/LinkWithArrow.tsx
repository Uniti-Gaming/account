import { Link } from 'react-router-dom';
import styles from './LinkWithArrow.module.scss';

interface LinkWithArrowProps {
    text: string
    path: string
}

const LinkWithArrow = ({text, path}: LinkWithArrowProps) => {
  return (
    <Link className={styles.link} to={path}>{text}<span/></Link>
  );
};

export default LinkWithArrow;