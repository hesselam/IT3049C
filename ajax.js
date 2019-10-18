"use strict";


const request = new XMLHttpRequest();

request.onreadystatechange = function() {

    console.log(request.readyState);
};

request.open("GET", "https://my-json-server.typicode.com/typicode/demo/posts");
request.send;