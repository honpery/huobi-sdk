import { expect } from 'chai';
import { Periods, Symbols } from '../../../src';
import { AccountAPI } from '../../../src/fetch';

const account = new AccountAPI({
    AccessKey: process.env.ACCESS_KEY,
});

describe('rest account api.', () => {
    let accountId;

    it('get current user account list data.', done => {
        account.getAccounts().then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            accountId = (data[0] || {}).id;
            done();
        });
    });

    it('get current user one account blance data.', done => {
        account.getBalance(accountId).then(({ code, data }) => {
            console.log(data);
            expect(code).eq(0);
            done();
        });
    });
});
