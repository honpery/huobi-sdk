// 交易对
export type HSymbol = 'btcusdt' | 'ethusdt' | 'ltcusdt' | 'etcusdt' | 'bccusdt'
    | 'bccbtc' | 'ethbtc' | 'ltcbtc' | 'etcbtc' | 'kncbtc' | 'zrxbtc' | 'astbtc' | 'rcnbtc' | 'rcneth';

export const Symbols: {[k in HSymbol]: HSymbol} = {
    btcusdt: 'btcusdt',
    ethusdt: 'ethusdt',
    ltcusdt: 'ltcusdt',
    etcusdt: 'etcusdt',
    bccusdt: 'bccusdt',
    bccbtc: 'bccbtc',
    ethbtc: 'ethbtc',
    ltcbtc: 'ltcbtc',
    etcbtc: 'etcbtc',
    kncbtc: 'kncbtc',
    zrxbtc: 'zrxbtc',
    astbtc: 'astbtc',
    rcnbtc: 'rcnbtc',
    rcneth: 'rcneth',
};

// K线类型
export type Period = '1min' | '5min' | '15min' | '30min' | '60min' | '1day' | '1mon' | '1week' | '1year';
export const Periods: {} = {

};

// K线数据
export interface Kline {
    id?: number;
    open?: number;
    close?: number;
    low?: number;
    high?: number;
    amount?: number;
    vol?: number;
    count?: number;
}

// depth类型
export type DepthType = 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5';
export const DepthTypes: {[k in DepthType]: DepthType} = {
    step0: 'step0',
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
    step5: 'step5',
};
