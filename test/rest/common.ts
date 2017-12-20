import { expect } from 'chai';
import { Huobi, Periods, Symbols } from '../../src';
import { huobi } from './market';

describe.skip('rest common api.', () => {
    it('get symbols data.', done => {
        huobi.common.getSymbols().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get currency data.', done => {
        huobi.common.getCurrencys().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get timestamp data.', done => {
        huobi.common.getTimestamp().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });
});
