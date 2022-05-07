const checkUrl = require('./index.js');

const url = 'https://example.com';

console.log(checkUrl.protocol(url));
console.log(checkUrl.http(url));
console.log(checkUrl.https(url));