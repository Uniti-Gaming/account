import { createContext, Dispatch, SetStateAction } from 'react';
import { ISubscribeOpportunity } from '../interfaces/userInterface';

export interface ITariffPopup {
    type: 'tariff' | 'key' | 'buy'
    title: string
    text?: string[]
    image: string
    buttons: {
        grey: {
            text: string
        }
        primary: {
            text: string
            onClick: () => void
        }
    }
    opportunities?: ISubscribeOpportunity
    output?: {
        name: string
        period: string
        total: number
        time: string
    }
}

interface ITariffPopupContext {
    popup: ITariffPopup | null;
    openPopup: Dispatch<SetStateAction<ITariffPopup | null>>;
}

export const TariffPopupContext = createContext({} as ITariffPopupContext);
