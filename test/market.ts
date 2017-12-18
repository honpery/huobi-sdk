import { expect } from 'chai';
import { Huobi, Periods, Symbols } from '../src';

const huobi = new Huobi({});

describe('rest market api', () => {
    it('get kline list.', done => {
        huobi.market.getKlines(Symbols.btcusdt, '1min', 2).then(result => {
            expect(result.status).to.eq('ok');
            done();
        });
    });
});
