import { expect } from 'chai';
import { DepthTypes, Periods, Symbols } from '../../../src';
import { MarketAPI } from '../../../src/fetch';

const market = new MarketAPI({
    AccessKey: process.env.ACCESS_KEY,
});

describe.skip('rest market api.', () => {
    it('get klines data.', done => {
        market.getKlines(Symbols.USDT.BTC, Periods.d1).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get merge data.', done => {
        market.getMerged(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get depth data.', done => {
        market.getDepth(Symbols.USDT.BTC, DepthTypes.step0).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get trade detail data.', done => {
        market.getTrade(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get trend list data.', done => {
        market.getTrades(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get market detail data.', done => {
        market.getDetail(Symbols.USDT.BTC).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });
});
