const request = require('request');

const url = process.argv[2] + '/18';

request(url, function (_error, _response, body) {
    console.log(JSON.parse(body)['films'].length);
});