import styles from './Navbar.module.scss';
import reductionIcon from '@images/account/overall-reduction.svg';
import userIcon from '@images/account/user-icon.svg';
import wallet from '@images/wallet.svg';
import tariffIcon from '@images/triangle-round-rectangle.svg';
import history from '@images/account/history.svg';
import question from '@images/account/question.svg';

import NavLinkWidthIcon from '../NavLinkWidthIcon/NavLinkWidthIcon';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLinkWidthIcon path='/' text='Обзор учётной записи' icon={reductionIcon} />
      <NavLinkWidthIcon path='information' text='Информация о записи' icon={userIcon} />
      <NavLinkWidthIcon path='balance' text='Пополнить баланс' icon={wallet} />
      <NavLinkWidthIcon path='tariff' text='Тарифы и ключи' icon={tariffIcon} />
      <NavLinkWidthIcon path='history' text='История транзакций' icon={history} />
      <NavLinkWidthIcon path='support' text='Помощь ' icon={question} />
    </nav>
  );
};

export default Navbar;