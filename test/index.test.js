const { protocol, http, https } = require('../');

const url = 'https://sefinek.fun';

test('Check protocol', () => expect(protocol(url)).toBe('https'));
test('Is http', () => expect(http(url)).toBe(false));
test('Is https', () => expect(https(url)).toBe(true));