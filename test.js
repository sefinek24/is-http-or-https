const { protocol, http, https } = require('./index.js');

const url = 'https://example.com';

console.log(protocol(url));
console.log(http(url));
console.log(https(url));