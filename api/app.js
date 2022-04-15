const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = require('express')();

app.use(bodyParser.json());
app.use(cookieParser());

module.exports = app;
