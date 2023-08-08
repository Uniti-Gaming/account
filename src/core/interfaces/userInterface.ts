export interface IUser {
    name: string;
    id: string;
    email: string;
    number: string;
    safety: ISafety
    balance: IBalance
}

export interface ISafety {
    number: boolean,
    email: boolean,
    other: boolean,
}

export interface IBalance {
    un_coins: number,
    up_coins: number,
    tickets: number,
}