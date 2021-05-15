const { createProxyMiddleware }  = require('http-proxy-middleware')

module.exports = function (app) {
    // /api 表示代理路径
    // target 表示目标服务器的地址
    app.use(
        createProxyMiddleware('/api', {
            target: "https://rehearsal.otrplus.mercedes-benz.com.cn",
            // target: "http://backend-service:8080",
            changeOrigin: true,
        })
    )
}
