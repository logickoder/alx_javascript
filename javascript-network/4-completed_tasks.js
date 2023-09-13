const request = require('request');

const url = process.argv[2];

request(url, function (_error, _response, body) {
    const todos = JSON.parse(body)
    const completed = {}

    todos.forEach(todo => {
        if (todo['completed'] === true) {
            completed[todo['userId']] = (completed[todo['userId']] || 0) + 1
        }
    })

    console.log(completed)
})