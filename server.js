var express = require('express'),
    Routes = require('./server/routes'),
    config = require('./server/config/config'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/** load routes*/

require('./server/routes')(app);

var port = process.env.PORT||config.server.port;

app.listen(port);

console.log('App started on port ' + port);