# Cake migration from CAKE beta version e3f8834 to CAKE 3.0.0

## Fast lane
If the customized variables have been placed in another file (not the original `_variables.scss` file), the existing folders and files can simply be replaced by the current ones.

1. replace all folders and files
2. include your own "variables" file

If the variables in the original `_variables.scss` file have been changed, these adjustments must be migrated to the current version. It is better to migrate to a separate file which overwrites the values of the `_variables.scss`.

3. (optional) Transfer your changes to the current version of CAKE


## Detail lane

To migrate from our pre-release `CAKE FE - BETA e3f8834` to `CAKE FE 3.0.0` there are a few changes you have to migrate.
You can organize the different migration-steps into 5 different steps, that need to be done, to be up to date with the newest version of cake.

1. To update the configuration files you can simply override your existing config.js file with the new one. All changes that you've possibly done, should be done after the overwrite.
The same has to be done with the `webpack.config.js`.

2. There has been little changes in the assets. As a result of the finalization of the icons, the structure of them has been changed and new icons has been added as old ones has been removed.
To update all icons simply replace the `assets/icons` folder with the new one.

3. The javascript-files can also be updated by replacing the complete `js` folder with the new one.

4. To fix some browser bugs and to enhance the stylings of the components there were many changes on the sass-files. If no changes have been made to these files, the SCSS files can simply be overwritten. To do this, overwrite the `scss` folder with the new folder of the same name. If adjustments were made, these must be taken over afterwards again.
Beside the adjustments of existing files also new files were added:

- _spinner.scss
- _toast.scssss
- mixins/_deprecate.scss
- utilities/_overflow.scss
- utilities/_stretched-link.scss
- vendor/_rfs.scss

Because of some new features and changes in the scss-files, the `_variables.scss` file has been changed as well. One important change is that the `$icon-path` variable has been splitted into a few new ones, according the restructuring of the asset-icon paths. The new variables are:

- $expression-icon-path
- $interaction-icon-path
- $navigation-icon-path
- $smiley-icon-path
- $scss-icon-path

There are also some new variables that are maybe interesting for you.

5. To update also the showroom with all the documentation changes, you can simply replace the `site/` folder with the new one.

These are all the steps needed to update from our pre-release to our first official version `CAKE FE 3.0.0`.

