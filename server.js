'use strict';

const express = require('express');
const path = require('path')
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(morgan('dev'));

const hostname = '127.0.0.1';
const port = 80;

app.use(express.static(path.join(__dirname, '/build')))

app.use('/api', createProxyMiddleware({
// app.use('/ittz-demo', createProxyMiddleware({
    target: 'http://backend-service:8080',
    changeOrigin: true,
  }));
  
app.listen(port, () => {
console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});