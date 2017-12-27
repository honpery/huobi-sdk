// 交易对
export type HSymbol = string;
export const Symbols = {
    USDT: {
        // 主区
        BTC: 'btcusdt',
        BCH: 'bchusdt',
        ETH: 'edhusdt',
        LTC: 'ltcusdt',
        XRP: 'xrpusdt',
        DASH: 'dashusdt',
        ETC: 'etcusdt',
        EOS: 'eosusdt',
        ZEC: 'zecusdt',
        OMG: 'omgusdt',

        // 创新区
        QTUM: 'qtumusdt',
    },

    BTC: {
        // 主区
        BCH: 'bchbtc',
        ETH: 'edhbtc',
        XRP: 'xrpbtc',
        LTC: 'ltcbtc',
        DASH: 'dashbtc',
        EOS: 'eosbtc',
        ETC: 'etcbtc',
        OMG: 'omgbtc',
        ZEC: 'zecbtc',

        // 创新区
        HSR: 'hsrbtc',
        VEN: 'venbtc',
        SALT: 'saltbtc',
        CVC: 'cvcbtc',
        MANA: 'manabtc',
        SMT: 'smtbtc',
        BAT: 'batbtc',
        QTUM: 'qtumbtc',
        CMT: 'cmtbtc',
        AST: 'astbtc',
        WAX: 'waxbtc',
        MCO: 'mcobtc',
        ITC: 'itcbtc',
        QASH: 'qashbtc',
        GNT: 'gntbtc',
        DGD: 'dgdbtc',
        PAY: 'paybtc',
        TNB: 'tnbbtc',
        TNT: 'tntbtc',
        QSP: 'qspbtc',
        SNT: 'sntbtc',
        MTL: 'mtlbtc',
        STORJ: 'storjbtc',
        RDN: 'rdnbtc',
        RCN: 'rcnbtc',
        KNC: 'kncbtc',
        ZRX: 'zrxbtc',

        // 分叉区
        BTG: 'btgbtc',
        BCD: 'bcdbtc',
        SBTC: 'sbtcbtc',
        BCX: 'bcxbtc',
    },

    ETH: {
        // 主区
        EOS: 'eoseth',
        OMG: 'omgeth',

        // 创新区
        HSR: 'hsreth',
        VEN: 'veneth',
        SALT: 'salteth',
        CVC: 'cvceth',
        MANA: 'manaeth',
        SMT: 'smteth',
        BAT: 'bateth',
        QTUM: 'qtumeth',
        CMT: 'cmteth',
        WAX: 'waxeth',
        MCO: 'mcoeth',
        ITC: 'itceth',
        QASH: 'qasheth',
        GNT: 'gnteth',
        DGD: 'dgdeth',
        PAY: 'payeth',
        TNB: 'tnbeth',
        TNT: 'tnteth',
        QSP: 'qspeth',
        RDN: 'rdneth',
        RCN: 'rcneth',
    },
};

// K线类型
export type Period = string;
export const Periods = {
    m1: '1min',
    m5: '5min',
    m15: '15min',
    m30: '30min',
    m60: '60min',
    d1: '1day',
    d7: '1week',
    d30: '1mon',
    y1: '1year',
};

// depth类型
export type DepthType = string;
export const DepthTypes = {
    step0: 'step0',
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
    step5: 'step5',
};

export type KlineID = number;

// K线数据
export interface Kline {
    id?: KlineID;                // K线id
    amount?: number;             // 成交量
    count?: number;              // 成交笔数
    close?: number;              // 收盘价,当K线为最晚的一根时，是最新成交价
    low?: number;                // 最低价
    high?: number;               // 最高价
    vol?: number;                // 成交额, 即 sum(每一笔成交价 * 该笔的成交量)
}

// K线聚合数据
export interface Merged {
    id?: KlineID;                // K线id
    amount?: number;             // 成交量
    count?: number;              // 成交笔数
    open?: number;               // 开盘价
    close?: number;              // 收盘价,当K线为最晚的一根时，是最新成交价
    low?: number;                // 最低价
    high?: number;               // 最高价
    vol?: number;                // 成交额, 即 sum(每一笔成交价 * 该笔的成交量)
    bid?: [number, number];      // [买1价, 买1量]
    ask?: [number, number];      // [卖1价, 卖1量]
    version?: KlineID;           // (文档上未标注该字段)
}

// Market Depth 数据
export interface Depth {
    bids?: [                     // 买盘,[price(成交价), amount(成交量)], 按price降序
        [number, number]
    ];
    asks?: [                     // 卖盘,[price(成交价), amount(成交量)], 按price升序
        [number, number]
    ];
    ts?: number;                 // 消息生成时间，单位：毫秒
    version?: number;            // 消息id（文档上标注的是id字段）
}

// Trade Detail 数据
export interface Trend {
    id?: number;                 // 成交id
    price?: number;              // 成交价钱
    amount?: number;             // 成交量
    direction?: 'sell' | 'buy';  // 主动成交方向
    ts?: number;                 // 成交时间
}

// Trade Detail 返回结果
export interface TrendResult {
    id?: number;
    ts?: number;
    data: Trend[];
}

// market detail数据
export interface Market {
    id?: number;                 // 消息id
    ts?: number;                 // 24小时统计时间
    amount?: number;             // 24小时成交量
    open?: number;               // 前推24小时成交价
    close?: number;              // 当前成交价
    high?: number;               // 近24小时最高价
    low?: number;                // 近24小时最低价
    count?: number;              // 近24小时累积成交数
    vol?: number;                // 近24小时累积成交额, 即 sum(每一笔成交价 * 该笔的成交量)
}
