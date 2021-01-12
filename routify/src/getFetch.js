import { writable } from "svelte/store";
const cache = new Map();

export function getData(url) {
	const store = writable(new Promise(() => {}));
	if (cache.has(url)) {
		store.set(Promise.resolve(cache.get(url)));
		console.log("cache");
		// return store;
	} else {
		console.log("not cache");
	}

	const load = async () => {
		console.log("fetch");
		const response = await fetch(url);
		if (response.status == 404) {
			store.set(Promise.reject("err"));
			return store;
		}
		const data = await response.json();
		cache.set(url, data);
		store.set(Promise.resolve(data));
	};
	setTimeout(load, 5000);
	return store;
}
