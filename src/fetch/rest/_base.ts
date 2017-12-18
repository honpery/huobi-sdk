import { Http } from 'xhttp-js';
import { APIs, SERVERs } from '../../config';

export interface ResData<T> {
    status: 'ok' | 'error';
    ch?: string;
    ts?: number;
    data?: T;
    'err-code'?: string;
    'err-msg'?: string;
}

export class BaseAPI {

    protected http = new Http({
        apis: APIs,
        servers: SERVERs,
        env: 'prod',
    });

    protected apis = APIs;

    protected async json<T>(res: Response) {
        const result: {
            code: number | string;
            message: string;
            ch?: string;
            ts?: number;
            data?: T;
        } = { code: 0, message: 'success' };

        if (res.status >= 400 && res.status <= 599) {
            result.code = res.status;
            result.message = res.statusText;
            return result;
        }

        const json = await res.json() as ResData<T>;

        if (json.status === 'ok') {
            result.data = json.data;
            result.ch = json.ch;
            result.ts = json.ts;
            return result;
        }

        if (json.status === 'error') {
            result.code = json['err-code'] || '';
            result.message = json['err-msg'] || '';
            return result;
        }

        return result;
    }
}
