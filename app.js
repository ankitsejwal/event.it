const express = require('express');
const home = require('./routes/home');

const app = express();

app.use('/', home);

app.listen(process.env.PORT || 3000);
