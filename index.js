const express = require('express');
const app = express();

function handleListening() {
    console.log("Listening on: http://localhost:4000");
}

function handleHome(request, response) {
    console.log(request);
    response.send('Hello from home');
}

function handleProfile(request, response) {
    response.send("Handle Profile")
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);