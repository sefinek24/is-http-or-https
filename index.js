exports.protocol = str => (/http:\/\//gim).test(str) ? 'http' : 'https';
exports.http = str => (/http:\/\//gim).test(str);
exports.https = str => (/https:\/\//gim).test(str);