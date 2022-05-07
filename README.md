## 🌍 What is that?
**EN:** The package checks the string for a keyword related to http or https.  
**PL:** Pakiet ten sprawdza ciąg pod kątem słowa kluczowego związanego z protokołem http lub https.

## 📝 Examples
```js
const checkUrl = require('./index.js');

const url = 'https://example.com';

console.log(checkUrl.protocol(url)); // String => https
console.log(checkUrl.http(url)); // Boolean => false
console.log(checkUrl.https(url)); // Boolean => true
```

## 🤝 Help
Open new <a href="https://github.com/sefinek24/is-http-or-https/issues/new/choose" target="_blank">Issue</a> on Github.