## 🌍 » What is that?
**EN:** This useless packet checks a string for a keyword related to protocol http or https.  
**PL:** Ten bezużyteczny moduł sprawdza string pod kątem słowa kluczowego związanego protokołem z http lub https.

## 🤔 » How to install?
> **$** npm install is-http-or-https

## 📝 » Examples
```js
const checkUrl = require('is-http-or-https');

const url = 'https://example.com';

console.log(checkUrl.protocol(url)); // String => https
console.log(checkUrl.http(url));     // Boolean => false
console.log(checkUrl.https(url));    // Boolean => true
```

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/is-http-or-https/issues/new/choose) on Github.