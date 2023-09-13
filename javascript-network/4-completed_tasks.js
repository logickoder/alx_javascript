const request = require('request');

const url = process.argv[2];

request(url, function (_error, _response, body) {
    const todos = JSON.parse(body)

    todos.forEach(todo => {
        if (todo['completed'] === true) {
            console.log(todo['title'])
        }
    })
})