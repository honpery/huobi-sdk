import { HSymbol } from './market';

export type Currency = string;

// 交易对及精度
export interface SymbolDetail {
    'base-currency'?: Currency;                // 基础币种
    'quote-currency'?: Currency;               // 计价币种
    'price-precision'?: number;                // 价格精度位数（0为个位）
    'amount-precision'?: number;               // 数量精度位数（0为个位）
    'symbol-partition'?: 'main' | 'innovation' | 'bifurcation';    // 交易区, main主区，innovation创新区，bifurcation分叉区
}
