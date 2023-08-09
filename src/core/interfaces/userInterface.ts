export interface IUser {
    name: string;
    id: string;
    email: string;
    phone: string;
    city: string;
    lang: string;
    ref: string;
    safety: ISafety;
    balance: IBalance;
    difrent: IDifrent;
}

export interface ISafety {
    number: boolean;
    email: boolean;
    other: boolean;
}

export interface IBalance {
    un_coins: number;
    up_coins: number;
    tickets: number;
}

export interface IDifrent {
    sex: string;
    instagram: string;
    tiktok: string;
    favorite: string;
}