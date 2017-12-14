import { MarketAPI } from './fetch';

export interface HuobiOptions {
    AccessKey?: string;
}

export class Huobi {
    market = new MarketAPI();

    constructor(private _options: HuobiOptions) { }

}
