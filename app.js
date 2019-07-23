const express = require('express');
const app = express();
const serverPORT = process.env.PORT || 4001;
const traceability = require('./serialport');

traceability();

app.listen(serverPORT);
console.log('Server listening in port ' + serverPORT + '...');

