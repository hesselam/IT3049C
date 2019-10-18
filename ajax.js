"use strict";


const request = new XMLHttpRequest();

request.onreadystatechange = function() {

    console.log(request.readyState);
};

request.open("GET", "https://my-json-server.typicode.com/hesselam/IT3049C/posts");
request.send;