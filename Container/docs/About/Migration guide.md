# Migration guide

## From version 3.x to 4.x

### New Git Repositories

The project is now at home in the Git repositories of Azure DevOps for development. **And a public distribution of the latest release is also provided on [GitHub](https://github.com/cake-hub/web-css_framework)!**

### New NPM source URL

It is now possible to get the npm package without authentication! We publish our package with public access to npmjs.com.
You can therefore just remove all the credentials and registry definition you've previously needed because the default settings does now work with our package.
Check out the [download section](../Getting%20started/Download/Download.md) for more details.

### License

Our project use now the Ms-RSL license.

### Folder structure and themes

We included themes for "Schwarz" and "Lidl". So our default "Cake" styling is now also a theme. For this reason some assets are moved to theme folder.

All theme relevant files like CSS, JS, images and fonts are now located in `dist/[THEME-OF-YOUR-CHOICE]/`. E.g. `dist/Lidl/`.

#### JavaScript

* Moved collecting JS file `cake.js` from `js/` folder to `themes/Cake/js`. This file contains all JavaScript components.

You didn't want all JS stuff? Only the components you really use? You can compile your own JS file by including the components you wand or you can use the new provided stand alone JS files for each component. You find the files in `dist/[THEME-OF-YOUR-CHOICE]/js`.

#### SCSS / CSS

* Moved SCSS files `cake-cookiebot.scss`, `cake-grid.scss`, `cake-reboot.scss` and `cake.scss` from `scss/` folder to `themes/Cake/scss`. The general files with `_` prefix stays in `scss/`.
* Renamed classes: `.cake-html-default` to `.html-style` and `.cake-body-default` to `.body-style`.

To make general styles for HTML elements more available, we started to add this styles to classes too. In this case you can add the styles for the body element to other containers too, or extend this parts via SCSS. We try to follow the shown naming till now: "What it is" `-style`.

* Renamed `_variables-color.scss` to `_variables-root.scss`

The Word colors is to specific, so we decided to choose a more general name for the use of this file.

### Component Popover

We updated the 3rd party dependency tippy.js from version 4 to 6. So, some adjustments are necessary. Check out the [migration guide from tippy.js](https://github.com/atomiks/tippyjs/blob/master/MIGRATION_GUIDE.md) to dive deeper. Here are the adjustments we did for our examples.

#### JavaScript

You can include `popover.js` like before. We did the magic for you.

If you want to configure some properties checkout the updated property section of Tippy.js.

#### Styling

The styling part was done by JavaScript in the version before. But now you have to include the 3rd party stylesheets.

```SCSS
@import "~tippy.js/dist/tippy";
@import "~tippy.js/dist/border";
```

Like before you include `@import "~{{ variables.npmPackageName }}/scss/popover"` after 3rd party includes.

##### Theme

There is **no theme "gray"** anymore. Please use **"cake"** instead. The styles are applied to this theme keyword.

### Typography scss import

We removed `_typography-content.scss` and added the content to the `_typography.scss`. The `_typography-font-face.scss` isn't called anymore from the `_typography.scss`, you have to add this to your bundle scss file like the `cake.scss`.

```SCSS
@import "~{{ variables.npmPackageName }}/scss/typography-font-face";
@import "~{{ variables.npmPackageName }}/scss/typography";
```

If you have problems with the import order see our `scss/cake.scss` as an example for a working order.
