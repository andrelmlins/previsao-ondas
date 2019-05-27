const url = require('url');

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

function baseUrl(req, pathname) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname
  });
}

module.exports = { fullUrl, baseUrl };
