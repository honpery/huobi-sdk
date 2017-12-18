/**
 * 用户资产API
 */
import { BaseAPI } from './_base';

export class AccountAPI extends BaseAPI {

    /**
     * 查询当前用户的所有账户(即account-id)
     */
    async getAccounts() {
        const { res } = await this.http.get({
            api: this.apis.rest.account.accounts,
        });

        return this.json(res);
    }

    /**
     * 查询指定账户的余额
     *
     * @param account_id 账户id
     */
    async getBalance(account_id: string) {
        const { res } = await this.http.get({
            api: this.apis.rest.account.balance,
            params: [account_id],
        });

        return this.json(res);
    }

}

