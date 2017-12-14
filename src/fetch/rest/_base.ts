import { Http } from 'xhttp-js';
import { APIs, SERVERs } from '../../config';

export class BaseAPI {

    protected http = new Http({
        apis: APIs,
        servers: SERVERs,
        env: 'prod',
    });

    protected apis = APIs;

}
