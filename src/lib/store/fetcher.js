import { writable } from 'svelte/store';

const cache = new Map();

export function getData(url) {
	const store = writable(new Promise(() => {}));

	if (cache.has(url)) {
		store.set(Promise.resolve(cache.get(url)));
	} else {
		const load = async () => {
			const response = await fetch(url);
			const data = await response.json();
			cache.set(url, data);
			store.set(Promise.resolve(data));
		};

		load();
	}
	return store;
}

export function getFilteredData(searchTerm, urls) {
	const store = writable(new Promise(() => {}));

	if (cache.has(urls[0]) && cache.has(urls[1])) {
		const data = [...cache.get(urls[0]), ...cache.get(urls[1])];
		const filteredData = data.filter((recipe) =>
			recipe.ingredients.some((ingredient) =>
				ingredient.text.toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
		store.set(Promise.resolve(filteredData));
	} else {
		const load = async () => {
			const responseFoods = await fetch(urls[0]);
			const foodsData = await responseFoods.json();
			cache.set(urls[0], foodsData);
            const responseDrinks = await fetch(urls[1]);
			const drinksData = await responseDrinks.json();
			cache.set(urls[1], drinksData);
            const data = [...foodsData, ...drinksData];
            const filteredData = data.filter((recipe) =>
                recipe.ingredients.some((ingredient) =>
                    ingredient.text.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
			store.set(Promise.resolve(filteredData));
		};

		load();
	}
	return store;
}
