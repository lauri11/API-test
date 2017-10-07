let userApi = require('./../../apiHelper/users.api');
let UserApi = new userApi({uri: 'https://api.github.com'});
const assert = require('assert');

describe('Test', function () {
    it('should get a single user', function () {
        return UserApi.getSingleUser('lauri11')
            .then(function (res) {
                assert.equal(res.id, 9596806);
            })
    });

    it('should get an array of users', function () {
        return UserApi.users
            .then(res => {
                assert.equal(res.length, 30)
            });
    });

    it('should get and authenticated user', function () {
        return UserApi.getAuthenticatedUser()
            .then(res => {
                console.log(res);
            });
    });
});