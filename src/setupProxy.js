const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://interview-ncq.herokuapp.com',
      changeOrigin: true,
    })
  );
};