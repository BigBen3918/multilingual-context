export const fetchTranslations = ({ language = "en" }) =>
	import(`../locales/${language}`).then((module) => {
		return module.default
	})
