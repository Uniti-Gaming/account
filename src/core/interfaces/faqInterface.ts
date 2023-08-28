export interface IFaqItem {
    question: string;
    answer: string;
}

export interface IFaqPost {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
}

