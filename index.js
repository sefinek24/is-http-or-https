module.exports = {
	protocol: str => {
		switch (true) {
		case (/http:\/\//gi).test(str): return 'http';
		case (/https:\/\//gi).test(str): return 'https';
		default: return undefined;
		}
	},
	http: str => (/http:\/\//gi).test(str),
	https: str => (/https:\/\//gi).test(str),
};