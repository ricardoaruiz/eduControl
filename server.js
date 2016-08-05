var express = require('./config/express');

var app = express();

var port = process.env.PORT || 9000

app.listen(port, function() {
    console.log('Edu-control fronend rodando em ' + port);
})