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

export interface IDifrent {
    sex: string;
    instagram: string;
    tiktok: string;
    favorite: string;
}