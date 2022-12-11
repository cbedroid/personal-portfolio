const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const proxyUrl = process.env.REACT_APP_PROXY_HOST;
  app.use(
    "/api/", // You can pass in an array too eg. ['/api', '/another/path']
    createProxyMiddleware({
      target: proxyUrl || "http://localhost:8000",
      changeOrigin: !!proxyUrl,
      pathRewrite: { "^/api/proxy": "" },
    }),
  );
};
