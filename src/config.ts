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

        // 用户资产API
        account: {
            accounts: {
                path: '/v1/account/accounts',
                desc: '查询当前用户的所有账户(即account_id)',
            },

            balance: {
                path: '/v1/account/accounts/:account_id/balance',
                desc: '查询指定账户的余额',
            },
        },

        // 交易API
        order: {

            place: {
                path: '/v1/order/orders/place',
                desc: '下单',
            },

            cancel: {
                path: '/v1/order/orders/:order_id/submitcancel',
                desc: '申请撤销一个订单请求',
            },

            cancels: {
                path: '/v1/order/orders/batchcancel',
                desc: '批量撤销订单',
            },

            list: {
                path: '/v1/order/orders',
                desc: '查询当前委托、历史委托',
            },

            detail: {
                path: '/v1/order/orders/:order_id',
                desc: '查询某个订单详情',
            },

            matchs: {
                path: '/v1/order/matchresults',
                desc: '查询当前成交、历史成交',
            },

            match: {
                path: '/v1/order/orders/:order_id/matchresults',
                desc: '查询某个订单的成交明细',
            },

        },

        // 借贷交易API
        margin: {
            in: {
                path: '/v1/dw/transfer-in/margin',
                desc: '现货账户划入至借贷账户',
            },

            out: {
                path: '/v1/dw/transfer-out/margin',
                desc: '借贷账户划出至现货账户',
            },

            apply: {
                path: '/v1/margin/orders',
                desc: '申请借贷',
            },

            repay: {
                path: '/v1/margin/orders/:order_id/repay',
                desc: '归还借贷',
            },

            orders: {
                path: '/v1/margin/loan-orders',
                desc: '借贷订单',
            },

            account: {
                path: '/v1/margin/accounts/balance',
                desc: '借贷账户详情',
            },
        },

        // 虚拟币提现API
        dw: {
            create: {
                path: '/v1/dw/withdraw/api/create',
                desc: '申请提现虚拟币',
            },

            cancel: {
                path: '/v1/dw/withdraw-virtual/:wd_id/cancel',
                desc: '申请取消提现虚拟币',
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
            'Content-Type': 'application/json',
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
