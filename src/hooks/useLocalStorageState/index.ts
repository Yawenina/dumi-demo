import { useState } from "react";

export default function useLocalStorageState<T>(key: string, options: {
	defaultValue?: T;
	serialize?: (value: T) => string;
	deserialize?: (value: string) => T;
}) {
	const { defaultValue, serialize = JSON.stringify, deserialize = JSON.parse } = options;
	console.log("🚀 ~ file: index.ts:4 ~ useLocalStorageState:", defaultValue)

	const [state, setState] = useState<T | undefined>(() => {
	console.log("🚀 ~ file: index.ts:8 ~ defaultValue:", defaultValue)

		const cachedValue = localStorage.getItem(key);
		if (cachedValue) return deserialize(cachedValue);
		return defaultValue;
	});
	const updateState = (newState: T | ((prev: T | undefined) => T)) => {
		const value = newState instanceof Function ? newState(state) : newState;
		localStorage.setItem(key, value ? serialize(value) : '');
		setState(value);
	}

	return [state, updateState]
}