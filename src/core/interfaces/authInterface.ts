export interface ISigninForm {
    email: string;
    password: string;
    checkbox: boolean;
}

export interface ISignupForm {
    name: string;
    email: string;
    number: string;
    password: string;
    birthday: string;
    city: string;
    visit_from: string;
    friend_ref?: string;
    privacy_policy: true;
    terms_of_use: true;
}
