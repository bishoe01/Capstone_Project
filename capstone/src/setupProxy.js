const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/login', { target: 'http://d8ed-218-37-109-50.ngrok.io', changeOrigin: true }));
  };