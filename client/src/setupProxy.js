const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://localhost:1234',
      changeOrigin: true,
    })
  );

  app.use(
    '/post',
    createProxyMiddleware({
      target: 'http://localhost:4567',
      changeOrigin: true,
    })
  );

  app.use(
    '/vote',
    createProxyMiddleware({
      target: 'http://localhost:7890',
      changeOrigin: true,
    })
  );

};
