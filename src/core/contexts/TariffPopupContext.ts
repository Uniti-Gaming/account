import { createContext, Dispatch, SetStateAction } from 'react';

export interface ITariffPopup {
    title: string,
    text: string
}

interface ITariffPopupContext {
    popup: ITariffPopup | null;
    openPopup: Dispatch<SetStateAction<ITariffPopup | null>>;
}

export const TariffPopupContext = createContext({} as ITariffPopupContext);
