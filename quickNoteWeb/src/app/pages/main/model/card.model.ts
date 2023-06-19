export class Card{
    id: number;
    title: string;
    items?: ICardItem[]
}

export interface ICardItem{
    title: string;
    description: string;
}