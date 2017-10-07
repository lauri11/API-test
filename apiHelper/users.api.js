const ApiBase = require('./apiBase');

class Users extends ApiBase {

    constructor(options) {
        super(options);
        this.uname = process.env.GITHUB_USERNAME;
        this.pword = process.env.GITHUB_PASSWORD;
    }

    getSingleUser(userId) {
        return this.sendRequest({uri: this.baseOptions.uri + `/users/${userId}`});
    }

    get users() {
        return this.sendRequest({uri: this.baseOptions.uri + '/users'});
    }

    getAuthenticatedUser() {
        return this.sendRequest({
            uri: this.baseOptions.uri + '/user',
            headers: {
                'Authorization': 'Basic ' + new Buffer(this.uname + ':' + this.pword).toString('base64')
            }
        });
    }
}

module.exports = Users;