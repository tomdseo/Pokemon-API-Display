const express = require('express');

var app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//...................TO USE ANGULAR
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(1337, () => console.log('Listening on port 1337...'));
