import { Currency } from './common';

// 账户
export interface Account {
    id?: number;
    type?: 'spot';
    state?: 'working' | 'lock';
    'user-id'?: number;
}

// 账户余额
export interface Balance extends Account {
    list: Array<{
        currency?: Currency;
        type?: string;
        balance?: number;
    }>;
}
