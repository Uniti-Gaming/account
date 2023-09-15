export interface IUser {
    name: string;
    user_id: string;
    email: string;
    number: string;
    user_ref: string;
    city: string;
    prefer_lang: 'Русский' | 'Turkmenskiy';
    gender: 'Мужской' | 'Женский';
    instagram: string;
    tiktok: string;
    love_service: string;
}

export interface IVerification {
    VerifyEmail: boolean;
    VerifyNumber: boolean;
    userDetails: boolean;
}

export interface IBalance {
    main: number;
    coins: number;
    tickets: number;
}

export interface ITransaction {
    transaction_id: string;
    user_id: string;
    date: string;
    operation_type: string;
    currency_type: 'main' | 'coins' | 'tickets';
    amount: string;
    status: 'success' | 'error' | 'pending';
}

export interface ISubscription {
    subscribe_id: string;
    subscribe_name: string;
    subscribe_logo: string;
    subscribe_price_1: string
    subscribe_price_3: string
    subscribe_price_6: string
}

export interface ICurrentTariff {
    active_subscribe: false | string;
    expiry_date?: string;
}

export interface ITariff extends ICurrentTariff {
    subscriptions: ISubscription[];
}

export interface ISubscribeOpportunities {
    id: number;
    subscribe_id: number;
    subscribe_descr: string | null;
    key_pc: boolean;
    key_android: boolean;
    teamspeak: boolean;
    mumble: boolean;
    serv_games: boolean;
    netw_games: boolean;
    coins: number;
    tickets: number;
    basic_lib: boolean;
    additional_lib: boolean;
    key_steam: boolean;
    high_download: boolean;
    blocked_games: boolean;
}
export interface ISubscribeDetail extends ISubscription {
    id: number;
    subscribe_logo_2: string;
    subscribe_opportunities: ISubscribeOpportunities[];
}

export interface IUserKeys {
    login: string
    steam_password: string
    windows_password: string
    mobile_password: string
}
