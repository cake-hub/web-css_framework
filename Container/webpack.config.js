const glob = require("glob");
const path = require( "path" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );
const UglifyJsPlugin =require( "uglifyjs-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const configuration = require("./docs/config");
const packageJson = require ("./package.json");

const _moduleAliases = packageJson._moduleAliases;
let absolutedAliases = {};

const uniqueFileNames = (pathArray , ext) => {
    let usedNames = [];
    let iconArray = [];
    for (let iconPath of pathArray.reverse ()) {
      const iconName = path.basename (iconPath, ext);
      if (!usedNames.includes (iconName)) {
        usedNames.push (iconName);
        iconArray.push (iconPath);
      }
    }
    return iconArray;
  };

for (let alias in _moduleAliases) {
    if(_moduleAliases.hasOwnProperty(alias)){
        absolutedAliases[alias] = path.resolve(__dirname, _moduleAliases[alias])
    }
}

//Method to extract all files of sourcePath and compile them to distPath (with minified version and exclusion of files)
const getEntryFiles = (sourcePath, distPath, minified = true) => {
    let entryFiles = {};
    for (let file of glob.sync(sourcePath)) {
      entryFiles [distPath + path.parse (file).name] = file;
      if (minified) {
        entryFiles [distPath + path.parse (file).name + ".min"] = file;
      }
    }
    return entryFiles;
};

// - - - - - - - - - - - - - - - -
// Starting with Webpack functions
// - - - - - - - - - - - - - - - -

// generate object of all files to be processed
const entry = {
    //Cake theme documentation assets
    ...getEntryFiles ("./build/assets/*.js", "docs/_assets/", false),

    // Theme files
    ...configuration.Themes.map (theme => ({
        ...getEntryFiles ("./themes/" + theme + "/js/*.js", "./dist/" + theme + "/js/"),
        ...getEntryFiles ("./themes/" + theme + "/scss/!(_)*.scss", "./dist/" + theme + "/css/"),
    })).reduce ((accumulator, currentValue) => ({ ...accumulator, ...currentValue})),
};

// resolve all aliases in the entry files (eg @develop)
const resolve = {
    modules: [
        path.resolve( "./" ),
        "node_modules"
    ],
    alias: absolutedAliases
};

// main processing of all entry files
// configuration of scss processor and bable js processor (ES6 -> ES5)
const generateFiles = {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require('postcss-inline-svg')({
                  removeFill: true,
                  xmlns: true,
                  path: process.cwd () + '/'
                }),
                require('autoprefixer'),
              ]
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using Dart-Sass by default
            options: {
                implementation: require('sass'),
            },
          }
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
};

// post precessing of all entry files after main processing
const optimization = {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        sourceMap: true,
        uglifyOptions: {
            output: {
              comments: false,
            },
        }
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
      }),
    ]
};

// start tools if processing of all entry files is done
const plugins = [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Compilation was successful! A webserver is available and points to the `./docs` folder. Open http://localhost:2021 to open example files. Eg. http://localhost:2021/Components/Accordion/examples/AccordionSingle.html'],
      },
      clearConsole: true,
    }),
    new MiniCssExtractPlugin(),
    // Cake-Theme icons
    ...configuration.Themes.map (theme => new SVGSpritemapPlugin(
        uniqueFileNames ([
          //Sort the icons by importance! (the last line overwrites all previous ones, if the name equals)
          ...glob.sync ('./assets/icons/!(_)*.svg'),
          ...glob.sync ('./assets/icons/!(_)**/!(_)*.svg'),
          ...glob.sync ('./themes/' + theme + '/assets/icons/!(_)*.svg'),
          ...glob.sync ('./themes/' + theme + '/assets/icons/!(_)**/!(_)*.svg'),
        ], '.svg'), {
        output: {
          filename: 'dist/' + theme + '/images/icon__sprite.svg',
          svgo: true,
        },
        sprite: {
          prefix: false,
        }
    })).values (),
    new FileManagerPlugin ({
        onEnd: {
            copy: [
                ...configuration.Themes.map (theme => ({ source: './themes/' + theme + '/assets/!(icons)**/*', destination: path.resolve(__dirname, './dist/' + theme) })).values (),

                { source: './dist/', destination: path.resolve(__dirname, './docs/_assets/themes/')},
                { source: './assets/images/examples',  destination: path.resolve(__dirname, './docs/_assets/images/examples')},
            ],
        }
    }),
    new FixStyleOnlyEntriesPlugin (),
];

module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './'),
    },
    context: path.join( __dirname, "./" ),
    entry: entry,
    resolve: resolve,
    module: generateFiles,
    optimization: optimization,
    plugins,
    stats: 'errors-warnings', // 'errors-warnings', 'verbose'
    devtool: "cheap-source-map", // prevent babel from using "eval" in javascript (https://webpack.js.org/configuration/devtool/)
};
