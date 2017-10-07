const rp = require('request-promise');
const _ = require('lodash');

class ApiBase {
    constructor(options) {
        this.baseOptions = _.merge(options, {
            headers: {
                'Connection': 'keep-alive',
                'User-Agent': 'Request-Promise'
            },
            uri: 'https://api.github.com',
            json: true,
        });
    }

    sendRequest(options) {
        return rp(_.defaultsDeep(options, this.baseOptions));
    }
}

module.exports = ApiBase;