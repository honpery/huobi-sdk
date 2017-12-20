import { expect } from 'chai';
import { DepthTypes, Huobi, Periods, Symbols } from '../../src';

export const huobi = new Huobi({});

describe.skip('rest market api.', () => {
    it('get klines data.', done => {
        huobi.market.getKlines(Symbols.USDT.BTC, Periods.d1).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get merge data.', done => {
        huobi.market.getMerged(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get depth data.', done => {
        huobi.market.getDepth(Symbols.USDT.BTC, DepthTypes.step0).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get trade detail data.', done => {
        huobi.market.getTrade(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get trend list data.', done => {
        huobi.market.getTrades(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get market detail data.', done => {
        huobi.market.getDetail(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });
});
