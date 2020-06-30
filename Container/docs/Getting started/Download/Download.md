# Download

Include it with your favorite package manager npm or download CAKE CSS-Framework to get the compiled CSS, JavaScript and source code.

## Package managers

Pull in CAKE's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, CAKE will **require a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer) and [Babel](https://babeljs.io/)** for a setup that matches our official compiled versions.

### npm

Install CAKE in your Node.js powered apps with [the npm package]({{ variables.npmPackageUrl }}):

```console
npm install --save {{ variables.npmPackageName }}
```

Or if you have specified some other registries in your project use:

```console
npm install --registry {{ variables.npmRegistryUrl }} --save {{ variables.npmPackageName }}
```

`require('{{ variables.npmPackageName }}/js/cake')` or `import cake from "{{ variables.npmPackageName }}/js/cake"` will load all of CAKE's plugins. The `{{ variables.npmPackageName }}` module itself does not export anything.

CAKE's `package.json` contains some additional metadata under the following keys:

- `sass` - path to CAKE's main [Sass](https://sass-lang.com/) source file
- `style` - path to CAKE's non-minified CSS that's been precompiled using the default settings (no customization)

#### registry settings and proxies

To be able to access our registry, if you are behind a proxy just configure the proxy settings of your project. To do so, you can configure your npm with a `.npmrc` file with the following content.

```toml
#proxy-settings
proxy=http://your-proxy.url:8080
https-proxy=http://your-proxy.url:8080
```

You can also use environment variables to put in dynamic values according your environment:

```toml
#proxy-settings
proxy=${PROXY_URL}
https-proxy=${PROXY_URL}
```

If you use already any special npm-registry in your project, you can also change the registry only for our CAKE package:

```toml
@cake-hub:registry= {{ variables.npmRegistryUrl }}
```


## Compiled CSS and JS

Download ready-to-use compiled code for CAKE CSS-Framework to easily drop into your project, which includes:

- Compiled and minified **CSS** bundles (`Container/dist/css`)
- Compiled and minified **JavaScript plugins** (`Container/dist/js`)
- Compiled and minified **assets/images** (`Container/dist/images`)
- **documentation** (`Container/docs`)
- and all the source files including a docker image

<a href="{{ variables.bundleDownloadUrl }}#v{{ version }}&format=zip" className="btn btn-primary">Download CSS-Framework v{{ version }} as ZIP file</a>

## Source files

Compile CAKE with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (e.g Libsass or Ruby Sass) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing
- [Babel](https://babeljs.io/) for compiling ES6 JavaScript into browser-compliant JavaScript
- [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) to load svg-icons inline to the css

<a href="{{ variables.sourceDownloadUrl }}#v{{ version }}&format=zip" className="btn btn-primary">Download source</a>
