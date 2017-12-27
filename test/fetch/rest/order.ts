import { expect } from 'chai';
import { Periods, Symbols } from '../../../src';
import { CommonAPI } from '../../../src/fetch';

const common = new CommonAPI({
    AccessKey: process.env.ACCESS_KEY,
});

describe.skip('rest common api.', () => {
    it('get symbols data.', done => {
        common.getSymbols().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get currency data.', done => {
        common.getCurrencys().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });

    it('get timestamp data.', done => {
        common.getTimestamp().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });
});
