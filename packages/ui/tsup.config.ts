import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
	treeshake: true,
	splitting: true,
	entry: ["src/**/*.tsx", "src/**/*.ts"],
	format: ["esm"],
	dts: true,
	minify: true,
	clean: false, // This is for Dev env as tsup takes a while to start
	external: ["react"],
	...options
}));
