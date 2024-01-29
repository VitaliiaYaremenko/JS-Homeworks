const parseUrl = function (url) {
  const urlAddress = new URL(url);

  return {
    href: urlAddress.href,
    protocol: urlAddress.protocol,
    host: urlAddress.host,
    hostname: urlAddress.hostname,
    port: urlAddress.port,
    pathname: urlAddress.pathname,
    search: urlAddress.search,
    hash: urlAddress.hash,
    origin: urlAddress.origin,
  };
};

const result = parseUrl('https://example.com:8080/path/name?query=123#hash');
console.log(result);

const userUrl = function () {
  return {
    href: window.location.href,
    protocol: window.location.protocol,
    host: window.location.host,
    hostname: window.location.hostname,
    port: window.location.port,
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    origin: window.location.origin,
  };
};

console.log(userUrl());
