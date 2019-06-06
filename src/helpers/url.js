const url = require('url');

function fullUrl(req) {
  return url.format({
    protocol: 'https',
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

function baseUrl(req, pathname) {
  return url.format({
    protocol: 'https',
    host: req.get('host'),
    pathname
  });
}

module.exports = { fullUrl, baseUrl };
