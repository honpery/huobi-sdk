/**
 * 行情API
 */
import { Depth, DepthType, DepthTypes, HSymbol, Kline, Market, Merged, Period, Trend, TrendResult } from '../../types';
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
    async getKlines(symbol: HSymbol, period: Period, size = 150) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.kline,
            query: { symbol, period, size },
        });

        return this.json<Kline[]>(res);
    }

    /**
     * 获取聚合行情(Ticker)
     *
     * @param symbol 交易对
     *
     */
    async getMerged(symbol: HSymbol) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.merged,
            query: { symbol },
        });

        return this.json<Merged>(res);
    }

    /**
     * 获取 Market Depth 数据
     *
     * @param symbol 交易对
     * @param type Depth 类型
     *
     */
    async getDepth(symbol: HSymbol, type: DepthType = DepthTypes.step0) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.depth,
            query: { symbol, type },
        });

        return this.json<Depth>(res);
    }

    /**
     * 获取 Trade Detail 数据
     *
     * @param symbol 交易对
     *
     * todo 本接口结构有问题
     */
    async getTrade(symbol: HSymbol) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.trade,
            query: { symbol },
        });

        return this.json<TrendResult>(res);
    }

    /**
     * 批量获取最近的交易记录
     *
     * @param symbol 交易对
     * @param size 获取交易记录的数量
     *
     * todo 本接口结构有问题
     *
     */
    async getTrades(symbol: HSymbol, size = 1) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.historyTrade,
            query: { symbol, size },
        });

        return this.json<TrendResult[]>(res);
    }

    /**
     * 获取 Market Detail 24小时成交量数据
     *
     * @param symbol 交易对
     *
     */
    async getDetail(symbol: HSymbol) {
        const { res } = await this.http.get({
            api: this.apis.rest.market.detail,
            query: { symbol },
        });

        return this.json<Market>(res);
    }

}
