/**
 * 行情API
 */
import { DepthType, HSymbol, Period } from '../types';
import { BaseAPI } from './_base';

export class MarketAPI extends BaseAPI {

    /**
     * 获取K线数据
     *
     * @param symbol 交易对
     * @param period K线类型
     * @param size 获取数量，默认150
     *
     */
    getKlines(symbol: HSymbol, period: Period, size = 150) {
        return this.http.get({
            api: this.apis.rest.market.kline,
            query: { symbol, period, size },
        });
    }

    /**
     * 获取聚合行情(Ticker)
     *
     * @param symbol 交易对
     *
     */
    getMerged(symbol: HSymbol) {
        return this.http.get({
            api: this.apis.rest.market.merged,
            query: { symbol },
        });
    }

    /**
     * 获取 Market Depth 数据
     *
     * @param symbol 交易对
     * @param type Depth 类型
     *
     */
    getDepth(symbol: HSymbol, type: DepthType) {
        return this.http.get({
            api: this.apis.rest.market.depth,
            query: { symbol, type },
        });
    }

    /**
     * 获取 Trade Detail 数据
     *
     * @param symbol 交易对
     *
     */
    getTrade(symbol: HSymbol) {
        return this.http.get({
            api: this.apis.rest.market.trade,
            query: { symbol },
        });
    }

    /**
     * 批量获取最近的交易记录
     *
     * @param symbol 交易对
     * @param size 获取交易记录的数量
     */
    getHistoryTrade(symbol: HSymbol, size = 1) {
        return this.http.get({
            api: this.apis.rest.market.historyTrade,
            query: { symbol, size },
        });
    }

    /**
     * 获取 Market Detail 24小时成交量数据
     *
     * @param symbol 交易对
     *
     */
    getDetail(symbol: HSymbol) {
        return this.http.get({
            api: this.apis.rest.market.detail,
            query: { symbol },
        });
    }

}
