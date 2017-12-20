import { CommonAPI, MarketAPI } from './fetch';

export interface HuobiOptions {
    AccessKey?: string;
}

export class Huobi {
    market = new MarketAPI();
    common = new CommonAPI();

    constructor(private _options: HuobiOptions) { }

}
