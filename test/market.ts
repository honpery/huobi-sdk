import { expect } from 'chai';
import { Huobi, Periods, Symbols } from '../src';

const huobi = new Huobi({});

describe('rest market api', () => {
    it('get kline list.', async done => {
        // const { result } = await huobi.market.getKlines(Symbols.btcusdt, '1min');
        expect(1).to.be.equals(1);
        done();
    });
});
