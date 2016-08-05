var express = require('express');

module.exports = function(){
    var app = express();

    app.use(express.static('public'));
    app.use(express.static('public/views'));
    app.use(express.static('bower_components'));

    return app;
}