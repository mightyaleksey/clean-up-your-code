# browserify

## Benefits
- Stable. Despite that a new release comes rarely, the api is stable and the lib well written.
- Simple. Compared to setting up tremendous configs, with browserify you just need to provide an entry file and optionaly list a few plugins.
- Modular. Enhance bundling with additional transformers and plugins.

## Caveats
- ECMAScript modules. Browserify itself supports only commonjs syntax. ES modules are partially supported, so using them forces you to transpile **import** to the **require** equivalent (which adds overhead to resulting bundle due to **export default** compatibility) or choose the appropriate tools. So using ES modules requires additional effort to make them work. But don't worry, you still can get the same benefits from commonjs syntax.

## Enhancements
- [babelify](https://github.com/babel/babelify) — applies babel transformation.
- [browser-pack-flat](https://github.com/goto-bus-stop/browser-pack-flat) — bundles modules into the single scope.
- [common-shakeify](https://github.com/browserify/common-shakeify) — tree shaking plugin.
- [tinyify](https://github.com/browserify/tinyify) - applies various optimizations together: unassertify, envify, common-shakeify, browser-pack-flat, bundle-collapser, minify-stream.

## Receipes
To be done...
