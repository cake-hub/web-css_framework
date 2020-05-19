# Download

Include it with your favorite package manager npm or download CAKE CSS-Framework to get the compiled CSS, JavaScript and source code.

## Package managers

Pull in CAKE's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, CAKE will **require a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer) and [Babel](https://babeljs.io/)** for a setup that matches our official compiled versions.

### npm

Install CAKE in your Node.js powered apps with [the npm package]({{ variables.npmPackageUrl }}):

```console
npm install --registry {{ variables.npmRegistryUrl }} --save @cake/web
```

`require('@cake/web/js/cake')` or `import cake from "@cake/web/js/cake"` will load all of CAKE's plugins. The `@cake/web` module itself does not export anything.

> _At the moment this package is only available with a special access-token. If you need access to our registry, please contact us via mail: {{ variables.contactMailAddress }}_

CAKE's `package.json` contains some additional metadata under the following keys:

- `sass` - path to CAKE's main [Sass](https://sass-lang.com/) source file
- `style` - path to CAKE's non-minified CSS that's been precompiled using the default settings (no customization)

#### authentification

To be able to access our registry, you need to authenticate yourself. To do so, you can configure your npm with a `.npmrc` file with the following content.
You need to replace the `${AUTH_TOKEN}` with your individual token and the `${AUTH_MAIL}` with the mail we've provided to you. Additionally you could provide your `${PROXY_URL}`, if you are behind a proxy.
Instead of replacing the variables, you could also set the appropriate values as environment variables (eg. a `.env` file) to fill these values dynamically.

```toml
#set registry url
registry={{ variables.npmPackageUrl }}
always-auth=true

#auth-token to access private repository
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:username=ANYTHING-BUT-EMPTY
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:_password=${AUTH_TOKEN}
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:email=${AUTH_MAIL}
//pkgs.dev.azure.com/schwarzit/_packaging/cake/npm/registry/:always-auth=true

#proxy-settings
proxy=${PROXY_URL}
https-proxy=${PROXY_URL}
```

## Compiled CSS and JS

Download ready-to-use compiled code for CAKE CSS-Framework to easily drop into your project, which includes:

- Compiled and minified **CSS** bundles (`Container/dist/css`)
- Compiled and minified **JavaScript plugins** (`Container/dist/js`)
- Compiled and minified **assets/images** (`Container/dist/images`)
- Compiled **documentation** (`Container/docs`)
- and all the source files including a docker image

<a href="{{ variables.bundleDownloadUrl }}{{ version }}&format=zip" className="btn btn-primary">Download CSS-Framework v{{ version }} as ZIP file</a>

## Source files

Compile CAKE with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (e.g Libsass or Ruby Sass) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing
- [Babel](https://babeljs.io/) for compiling ES6 JavaScript into browser-compliant JavaScript
- [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) to load svg-icons inline to the css

<a href="{{ variables.sourceDownloadUrl }}{{ version }}&format=zip" className="btn btn-primary">Download source</a>
