/**
 * 交易API
 */
import { BaseAPI } from './_base';

export class OrderAPI extends BaseAPI {

    /**
     * 下单
     *
     * @param order 订单数据
     */
    async place(order: any) {
        const { res } = await this.http.post({
            api: this.apis.rest.order.place,
            body: order,
        });

        return this.json(res);
    }

    /**
     * 申请撤销一个订单请求
     *
     * @param order_id 订单id
     *
     */
    async cancel(order_id: string) {
        const { res } = await this.http.post({
            api: this.apis.rest.order.cancel,
            params: [order_id],
        });

        return this.json(res);
    }

    /**
     * 批量撤销订单
     *
     * @param order_ids 订单id数组
     *
     */
    async cancels(order_ids: string[]) {
        const { res } = await this.http.post({
            api: this.apis.rest.order.cancels,
            body: { order_ids },
        });

        return this.json(res);
    }

    /**
     * 查询某个订单详情
     *
     * @param order_id 订单id
     *
     */
    async getOrder(order_id: string) {
        const { res } = await this.http.get({
            api: this.apis.rest.order.detail,
            params: [order_id],
        });

        return this.json(res);
    }

    /**
     * 查询某个订单的成交明细
     *
     * @param order_id 订单id
     *
     */
    async getMatch(order_id: string) {
        const { res } = await this.http.get({
            api: this.apis.rest.order.match,
            params: [order_id],
        });

        return this.json(res);
    }

    /**
     * 查询当前委托、历史委托
     *
     */
    async getOrders(conditions: any) {
        const { res } = await this.http.get({
            api: this.apis.rest.order.list,
            query: conditions,
        });

        return this.json(res);
    }

    /**
     * 查询当前成交、历史成交
     */
    async getMatchs(conditions: any) {
        const { res } = await this.http.get({
            api: this.apis.rest.order.matchs,
            query: conditions,
        });

        return this.json(res);
    }

}
