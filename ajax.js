"use strict";


const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState !== request.DONE) { return; }

    const response = JSON.parse(request.responseTest);

    console.log(`The post title is: $(response[0].title)`)
};

request.open("GET", "https://my-json-server.typicode.com/hesselam/IT3049C/posts");
request.send();