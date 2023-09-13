const request = require('request');

const url = process.argv[2];
const characterId = '18';

request(url, function (_error, _response, body) {
    body = JSON.parse(body)

    let count = 0

    const films = body['results']
    films.forEach(film => {
        const characters = film['characters'];
        if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
            count += 1
        }
    })

    console.log(count)
});