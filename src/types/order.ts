import { HSymbol } from './market';

export type OrderID = number;

export interface NewOrder {
    'account-id': number;
    amount: string;
    price?: string;
    source?: string;
    symbol: HSymbol;
    type: string;
}
