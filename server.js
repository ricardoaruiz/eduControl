var express = require('./config/express');

var app = express();

app.set('port',9000);

app.listen(app.get('port'), function() {
    console.log('Edu-control fronend rodando em ' + app.get('port'));
})