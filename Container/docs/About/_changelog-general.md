# Change log

## [4.0.0](https://github.com/cake-hub/web-css_framework/tree/v4.0.0) - 2020-06-25

### Added

* `JS`: All themes compile a JavaScript file for each component. Not only a large cellecting JS file. So you can include a ready to use JS file for only the comonents you use in your project.
* `NPM`: Added Themed files to npm package
* `SCSS`: The Lidl and Schwarz themes also contains `cake-grid.scss` and `cake-reboot.scss` file.

### Changed

* `Assets`: Moved CAKE logo from `/Container/assets/images/logo.svg` to theme folder `/Container/themes/Cake/assets/images/logo.svg`.
* `JS`: Moved collecting JS file `cake.js` from `/Container/js/` folder to `/Container/themes/Cake/js`. This file contains all JavaScript components.
* `SCSS`: Moved SCSS files `cake-cookiebot.scss`, `cake-grid.scss`, `cake-reboot.scss` and `cake.scss` from `/Container/scss/` folder to `/Container/themes/Cake/scss`. The general files with `_` prefix stays in `/Container/scss/`.
* `SCSS`: Renamed class `.cake-html-default` to `.html-style`
* `SCSS`: Renamed class `.cake-body-defautl` to `.body-style`
* `SCSS`: Renamed file `_variables-color` to `_variables-root`


## [3.11.1](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.11.1) - 2020-05-07

### Fixed

* `Doc`: "Download page" | Fixed version number

## [3.11.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.11.0) - 2020-04-09

### Highlights

* `Added`: Added `Lidl Plus` page in new `Additional specalties` category
* `Added`: "Flap" | Added flap component to Lidl Plus page

## [3.9.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.9.0) - 2020-01-16

### Highlights

* `Added`: "Cookie alert" | Added extended overlay version of cookie alert with configuration menu
* `Added`: "Cookie alert" | Added templates and tutorial on how to integrate our cookie alert into Cookie-Bot
* `Doc`: "Browser focus" | Added basic explanation and style description for cake browser focus

### Added

* `Doc`: "Browser focus" | Added basic explanation and style description for cake browser focus

### Changed

* `SCSS`: Use `//` comments if possible instead of `/* */`. The first ones are not in the CSS output.


## [3.8.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.8.0) - 2019-11-07

### Highlights

* `Changed`: Improvement of Header accessibility
* `Changed`: Code improvement (linter)


## [3.7.1](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.7.1) - 2019-10-01

### Fixed

* `Doc`: "Change log" | Added missing change log entry of the new JavaScript documentation page in v3.7.0


## [3.7.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.7.0) - 2019-09-30

### Highlights

* `Added`: Added slider functionality to the header component
* `Doc`: Added new [explanation page](../Getting%20started/JavaScript.md) for using our JavaScript

### Added

* `Doc`: "JavaScript" | Added [new explanation](../Getting%20started/JavaScript.md) page for using our JavaScript


## [3.6.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.6.0) - 2019-08-15

### Highlights

* `Added`: **Badge**-Component


## [3.5.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.5.0) - 2019-07-18

### Highlights

* `Added`: **Cookie Alert**-Component


## [3.4.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.4.0) - 2019-07-04

### Fixed

* `Doc`: "Icon" | Fix not showing icons in IE11 in showroom


## [3.3.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.3.0) - 2019-06-26

### Added

* `Doc`: New notice to inform the user if the component or element is modifiable or not modifiable.

### Changed

* `Env`: Update npm package URL from `schwarzit.pkgs.visualstudio.com` to `pkgs.dev.azure.com/schwarzit`


## [3.2.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.2.0) - 2019-06-06

### Highlights

* `Doc`:  "Download" | CAKE is now available on the world wide web as an npm package. See the documentation on how to get it, under "Download".


## [3.1.0](https://www.secrz.de/bitbucket/projects/CAKE/repos/phoenix/browse?at=refs%2Ftags%2Fv3.1.0) - 2019-05-24

### Highlights

* `Changed`: CAKE is now available in a **neutral design**. The styling of the components is done in **themes** and Lidl is now one of them.

### Changed

* `CSS`, `Assets`: Split component styling from default CAKE to seperate theme repository. You have to include a theme to get styled components. Otherwise the components are displayed in neutral gray colors.
  * New theme repositories
    * [Lidl theme](https://www.secrz.de/bitbucket/projects/CAKE/repos/cake-themes/browse?at=refs%2Fheads%2Flidl%2Fmaster)
    * [Schwarz theme](https://www.secrz.de/bitbucket/projects/CAKE/repos/cake-themes/browse?at=refs%2Fheads%2Fschwarz%2Fmaster)
  * CAKE has now neutral colors, icons and fonts instead of Lidl styling.
  * "Header" component get the Logo from the theme
  * "Icon" component get the icon set from the theme
  * `variables.scss`
    * `$fonts-to-load` has now the value `null` as default. The Lidl fonts now takes place in the Lidl theme.
    * `$font-family-sans-serif` moved LidlFontCondPro from font set in CAKE to the Lidl theme.
    * `$font-weight-bold` has now the value `700`. The Lidl font-weight for bold now takes place in the Lidl theme.

### Removed

* `HTML`: removed the deprecated example pages `site/examples`
