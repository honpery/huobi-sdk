/**
 * 公共API
 */
import { Currency, SymbolDetail } from '../../types';
import { BaseAPI } from './_base';

export class CommonAPI extends BaseAPI {

    /**
     * 查询系统支持的所有交易对及精度
     */
    async getSymbols() {
        const { res } = await this.http.get({
            api: this.apis.rest.common.symbols,
        });

        return this.json<SymbolDetail[]>(res);
    }

    /**
     * 查询系统支持的所有币种
     */
    async getCurrencys() {
        const { res } = await this.http.get({
            api: this.apis.rest.common.currencys,
        });

        return this.json<Currency[]>(res);
    }

    /**
     * 查询系统当前时间
     */
    async getTimestamp() {
        const { res } = await this.http.get({
            api: this.apis.rest.common.timestamp,
        });

        return this.json<number>(res);
    }

}
