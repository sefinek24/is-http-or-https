exports.protocol = str => {
	switch (true) {
	case (/http:\/\//gim).test(str): return 'http';
	case (/https:\/\//gim).test(str): return 'https';
	default: return undefined;
	}
};

exports.http = str => (/http:\/\//gim).test(str);
exports.https = str => (/https:\/\//gim).test(str);