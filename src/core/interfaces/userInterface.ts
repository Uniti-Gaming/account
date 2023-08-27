export interface IUser {
    name: string;
    user_id: string;
    email: string;
    number: string;
    user_ref: string;
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

export interface IDifrent {
    sex: string;
    instagram: string;
    tiktok: string;
    favorite: string;
}

export interface ISubscription {
    subscribe_id: string;
    subscribe_name: string;
    subscribe_logo: string;
    subscribe_price_1: string
    subscribe_price_3: string
    subscribe_price_6: string
}

export interface ITariff {
    success: boolean;
    active_subscribe: false | string;
    expiry_date?: string;
    subscriptions: ISubscription[];
}
