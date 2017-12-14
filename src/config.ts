import { initApis, initServers } from 'xhttp-js';

export const APIs = initApis({
    rest: {
        // 行情API
        market: {
            kline: {
                path: '/market/history/kline',
                desc: '获取K线数据',
            },

            merged: {
                path: '/market/detail/merged',
                desc: '获取聚合行情(Ticker)',
            },

            depth: {
                path: '/market/depth',
                desc: '获取 Market Depth 数据',
            },

            trade: {
                path: '/market/trade',
                desc: '获取 Trade Detail 数据',
            },

            historyTrade: {
                path: '/market/history/trade',
                desc: '批量获取最近的交易记录',
            },

            detail: {
                path: '/market/detail',
                desc: '获取 Market Detail 24小时成交量数据',
            },
        },

        // 公共API
        common: {
            symbols: {
                path: '/v1/common/symbols',
                desc: '查询系统支持的所有交易对',
            },

            currencys: {
                path: '/v1/common/currencys',
                desc: '查询系统支持的所有币种',
            },

            timestamp: {
                path: '/v1/common/timestamp',
                desc: '查询系统当前时间',
            },
        },
    },

    ws: {

    },
});

export const SERVERs = initServers({
    rest: {
        host: {
            prod: 'https://api.huobi.pro',
        },
        desc: 'RESTful api',
        apis: [APIs.rest],
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36',        // tslint:disable
        },
    },

    ws: {
        host: {
            prod: 'https://api.huobi.pro',
        },
        desc: 'web socket api',
        apis: [APIs.ws],
    },
});
