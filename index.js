'use strict';

const path = require('path')
const express = require('express');

const api_v1 = require(path.join(__dirname, 'api_v1.js'))

const app = express();
const PORT = 39605
const API_VERSION = 'v1'

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(`/api/${API_VERSION}`, api_v1);

// app.use('/', express.static(__dirname+'/front'));
app.listen(PORT, () => {
  console.log(`Server is running on 0.0.0.0:${PORT}`);
});

