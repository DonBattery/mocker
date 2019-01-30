'use strict';

const app = require('express')();

app.get('/', (req, res) => { res.send('OK\n') });

app.listen(3434);
