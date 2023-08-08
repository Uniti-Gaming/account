import LayoutBlock from '@/components/LayoutBlock/LayoutBlock';
import Clipboard from '../Clipboard/Clipboard';

const Account = () => {
  return (
    <LayoutBlock
      title='ИНФОРМАЦИЯ АККАУНТА'
      link={{
        path: '/account/history',
        text: 'Зачем мне это?',
      }}>
      <div style={{ padding: '31px 0 23px' }}>
        <Clipboard value='UG-45-qwer' label='Мой ID' />
        <Clipboard value='XXXX-XXXX-XXXX' label='Реферальный код' />
      </div>
    </LayoutBlock>
  );
};

export default Account;