import { ISubscribeOpportunities } from '@/core/interfaces/userInterface';

import windows from '@images/account/tariff/options/windows.svg';
import android from '@images/account/tariff/options/android.svg';
import teamSpeak from '@images/account/tariff/options/team-speak.png';
import mumble from '@images/account/tariff/options/mumble.svg';
import cloud from '@images/account/tariff/options/cloud.svg';
import network from '@images/account/tariff/options/network.svg';
import libery from '@images/account/tariff/options/libery.svg';
import plus from '@images/account/tariff/options/plus.svg';
import steam from '@images/account/tariff/options/steam.png';
import speed from '@images/account/tariff/options/speed.svg';
import exit from '@images/account/tariff/options/exit.svg';
import coin from '@images/account/coins/un-coin.png';
import ticket from '@images/account/coins/ticket.png';

interface IOption {
  text: { ru: string };
  image: string;
  value: keyof ISubscribeOpportunities;
}

export const options: IOption[] = [
  {
    text: {
      ru: 'Ключ Unite Gaming for PC',
    },
    image: windows,
    value: 'key_pc',
  },
  {
    text: {
      ru: 'Ключ Unite Gaming for Android',
    },
    image: android,
    value: 'key_android',
  },
  {
    text: {
      ru: 'Доступ в TeamSpeak',
    },
    image: teamSpeak,
    value: 'teamspeak',
  },
  {
    text: {
      ru: 'Доступ в Mumble',
    },
    image: mumble,
    value: 'mumble',
  },
  {
    text: {
      ru: 'Доступ к серверным играм',
    },
    image: cloud,
    value: 'serv_games',
  },
  {
    text: {
      ru: ' Доступ к сетевым играм',
    },
    image: network,
    value: 'netw_games',
  },
  {
    text: {
      ru: 'UG баллов',
    },
    image: coin,
    value: 'coins',
  },
  {
    text: {
      ru: 'билет',
    },
    image: ticket,
    value: 'tickets',
  },
  {
    text: {
      ru: 'Доступ к базовой библиотеке игр',
    },
    image: libery,
    value: 'basic_lib',
  },
  {
    text: {
      ru: 'Доступ к расширенной библиотеке игр',
    },
    image: plus,
    value: 'additional_lib',
  },
  {
    text: {
      ru: 'Ключ - Steam',
    },
    image: steam,
    value: 'key_steam',
  },
  {
    text: {
      ru: 'Повышенная скорость скачивания',
    },
    image: speed,
    value: 'high_download',
  },
  {
    text: {
      ru: 'Доступ к заблокированным играм',
    },
    image: exit,
    value: 'blocked_games',
  },
];