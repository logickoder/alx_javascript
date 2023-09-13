const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const fileName = process.argv[3];

request(url, function (_error, _response, body) {
    fs.writeFile(fileName, body, 'utf8', function (error) {
        if (error) {
            console.log(error);
        }
    });
})