import { IOption } from './optionInterface';

export interface SelectProps {
    name: string;
    error?: boolean;
    values: {
        [key: string]: string;
    };
    options: IOption[];

    setValues: (values: { [key: string]: string }) => void;
}