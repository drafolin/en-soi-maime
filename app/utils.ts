export const getLocalStorage = (key: string) => {
	if (typeof window !== "undefined") {
		return window.localStorage.getItem(key);
	} else {
		return null;
	}
};

export const setLocalStorage = (key: string, value: string) => {
	if (typeof window !== "undefined") {
		return window.localStorage.setItem(key, value);
	}
};
