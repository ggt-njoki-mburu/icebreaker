export interface Question {
    id: string;
    body: string;
}

export interface Category {
    id: string;
    title: string;
    questions: Question[];
}