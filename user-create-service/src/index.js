const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const userValidator = require('./request/UserValidator');

const user = require('./routes/User');

const app = express();

app.use(bodyParser.json());

app.post('/user',userValidator.storeAction(),user.store);

app.listen(config.port,() => console.log(`app is running on ${config.baseUrl}:${config.port}`));
