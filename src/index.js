const xhr = require("xhr")
const app = document.querySelector('#root')

xhr({
    method: "get",
    json: true,
    uri: "/api/users"
}, function (err, resp, body) {
    let users = resp.body;
    let length = users.length;

    for (var i = 0; i < length; i++) {
        var u = users[i];

        const heading = document.createElement('h4')
        heading.textContent = 'Hello ' + u.username + "!";

        app.append(heading)
    }
})