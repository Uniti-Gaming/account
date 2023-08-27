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
export interface ITariff {
    success: boolean;
    subscribe_id?: string;
    subscribe_name?: 'Хранитель' | 'Титан' | 'Властелин' | 'Герой';
    subscribe_end?: string;
    message?: string;
}
