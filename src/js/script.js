const updateQueryString = function (url, key, value) {
  const urlAddress = new URL(url);

  const paramsUrl = urlAddress.searchParams;
  urlAddress.searchParams.append(key, value);
  urlAddress.search = paramsUrl.toString();

  return urlAddress.toString();
};

console.log(updateQueryString('https://example.com/path?query=123', 'query', '266'));
