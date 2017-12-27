import { Http } from 'xhttp-js';
import { APIs, SERVERs } from '../../config';
import { FetchOptions } from '../../types';

export interface ResData<T> {
    status: 'ok' | 'error';
    ch?: string;
    ts?: number;
    data?: T;
    tick?: T;
    'err-code'?: string;
    'err-msg'?: string;
}

export class BaseAPI {

    protected http: Http<any>;

    protected apis = APIs;

    constructor(protected _options: FetchOptions) {
        const { AccessKey: AccessKeyId, SignatureMethod, SignatureVersion } = _options;
        this.http = new Http({
            apis: APIs,
            servers: SERVERs,
            env: 'prod',
            query: { AccessKeyId, SignatureMethod, SignatureVersion },
        });
    }

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

        let json: ResData<T> | null = null;

        json = await res.json();

        if (!json) return result;

        if (json.status === 'ok') {
            result.data = json.data || json.tick;
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
