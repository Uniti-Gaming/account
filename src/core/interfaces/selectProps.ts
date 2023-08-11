import { IOption } from './optionInterface';

export interface SelectProps {
    name: string;
    values: {
        [key: string]: string;
    };
    options: IOption[];
    setValues: React.Dispatch<React.SetStateAction<{
        [key: string]: string;
    }>>;
}