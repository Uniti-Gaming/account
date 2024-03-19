import android from '@images/account/keys/android.png';
import steam from '@images/account/keys/steam.png';
import windows from '@images/account/keys/windows.png';

interface IKeysData {
  description: string[];
  image: string;
  title: string;
  link: string;
  password: 'steam_password' | 'windows_password' | 'mobile_password';
}

export const keyesData: IKeysData[] = [
  {
    description: [
      'Ключ "Unite Gaming for PC" обеспечивает вас доступом к единой локальной сети и предоставляет возможность\
      с низкой задержкой играть в игры для ПК в Туркменистане в компании друзей.',
      'Для начала игры, пожалуйста, загрузите Unite Gaming Launcher for PC, введите в него предоставленный\
      логин и пароль из указанного блока, и импортируйте данный ключ в приложение',
    ],
    image: windows,
    title: 'Unite Gaming for PC',
    password: 'windows_password',
    link: 'http://account.unite-gaming.com/files/windows.vpn',
  },
  {
    description: [
      'Ключ "Steam" предоставляет возможность оптимизировать и снизить задержку (ping) в популярных онлайн-играх,\
      а также ускоряет загрузку игр в Steam.',
      'Важно отметить, что, к сожалению, ключ Steam может не работать у всех абонентов "Turkmen Telecom".\
      Если вы не получаете ожидаемого эффекта от ключа "Steam", рекомендуется попробовать его использовать\
      несколько раз в разное время.',
      'Чтобы активировать ключ, вам необходимо скачать Unite Gaming Launcher for PC и ввести в него логин и пароль,\
      предоставленные в указанном блоке, а затем импортировать данный ключ',
    ],
    image: steam,
    title: 'Ключ -Steam',
    password: 'steam_password',
    link: 'http://account.unite-gaming.com/files/steam.vpn',
  },
  {
    description: [
      'Ключ "Unite Gaming for Android" позволяет вам подключиться к единой локальной мобильной сети и играть\
      в игры для Android с низкой задержкой в Туркменистане.',
      'Чтобы начать игру, вам необходимо скачать Unite Gaming Launcher for Android, импортировать\
      данный ключ и ввести в него логин и пароль, предоставленные в указанном блоке',
    ],
    image: android,
    title: 'Unite Gaming for Android',
    password: 'mobile_password',
    link: 'http://account.unite-gaming.com/files/mobile.vpn',
  },
];