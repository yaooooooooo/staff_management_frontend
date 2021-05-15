const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use('/api', createProxyMiddleware({
  target: 'https://qa.otrplus.mercedes-benz.com.cn/ittz-demo',
  // pathRewrite:{'^/api':''},
  changeOrigin: true,
}));

app.listen(4000,() => {
  console.log('Listen 4000');
});
