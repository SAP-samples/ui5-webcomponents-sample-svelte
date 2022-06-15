import sveltePreprocess from "svelte-preprocess";

export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
};
