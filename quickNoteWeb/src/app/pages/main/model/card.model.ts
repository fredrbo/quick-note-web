export class Card{
    title: string;
    items?: ICardItem[]
}

export interface ICardItem{
    title: string;
    description?: string;
}