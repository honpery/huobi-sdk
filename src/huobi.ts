import { CommonAPI, MarketAPI } from './fetch';

export interface HuobiOptions {
    AccessKey?: string;
}

export class Huobi {
    market: MarketAPI;
    common: CommonAPI;

    constructor(private _options: HuobiOptions) {
        this.market = new MarketAPI(_options);
        this.common = new CommonAPI(_options);
    }
}
