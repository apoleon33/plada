export async function load({ url }) {
	let endFirstPathName = url.pathname.length;
	for (let i = 1; i < url.pathname.length; i++) {
		if (url.pathname[i] === '/') {
			endFirstPathName = i;
			break;
		}
	}

	return {
		mainPath: url.pathname.slice(1, endFirstPathName),
		pathname: url.pathname
	};
}
