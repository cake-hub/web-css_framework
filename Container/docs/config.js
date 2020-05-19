//This file should not be written using the module syntax of ES6

const path = require( "path" );

module.exports = class Configuration {

    static get developementServerPort () {
        return process.env.PORT || 2121;
    }

    static get defaultTheme () {
        return "Cake";
    }

    static get defaultThemePath () {
        return "_assets/themes/" + Configuration.defaultTheme + "/";
    }

    static get themeIconPath () {
        return "/assets/icons/";
    }

    static get assetPath () {
        return Configuration.basePath + Configuration.defaultThemePath + "assets";
    }

    static get basePath () {
        return "../../../";
    }

    static get exampleBasePath () {
        return Configuration.basePath;
    }

    static get rootPath () {
        return path.resolve (__dirname, "..");
    }

    static get pageAssetFolders () {
        return [
            "assets",
            "examples"
        ];
    }

    static get pageExamplePath () {
        return Configuration.pageAssetFolders [1];
    }

    static get exampleImagesPath () {
        return path.resolve (__dirname, "_assets/themes/Cake/assets/images/examples");
    }

    static get docsPath () {
        return __dirname;
    }

}
