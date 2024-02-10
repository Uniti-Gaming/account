import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './LinkWithArrow.module.scss';

interface LinkWithArrowProps {
  text: string
  path: string
  className?: string
}

const LinkWithArrow = ({ text, path, className }: LinkWithArrowProps) => {
  return (
    <Link className={classNames(styles.link, className)} to={path}>
      {text}
      <span />
    </Link>
  );
};

export default LinkWithArrow;