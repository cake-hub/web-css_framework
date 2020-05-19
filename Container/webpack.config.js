const glob = require("glob");
const path = require( "path" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );
const UglifyJsPlugin =require( "uglifyjs-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const config = require("./docs/config");
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

// set the themes
const themes = [
    "Lidl",
    "Schwarz",
];

for (let alias in _moduleAliases) {
    if(_moduleAliases.hasOwnProperty(alias)){
        absolutedAliases[alias] = path.resolve(__dirname, _moduleAliases[alias])
    }
}

const plugins = [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Compilation was successful! We watch file changes and generate new distributed files. You can find examples in docs folder. Eg docs/Components/Accordion/examples/AccordionSingle.html'],
      },
      clearConsole: true,
    }),
    new MiniCssExtractPlugin(),
    // Cake-Vanilla icons
    new SVGSpritemapPlugin(['./assets/icons/!(_)**/!(_)*.svg', './assets/icons/!(_)*.svg'], {
      output: {
        filename: "dist/images/icon__sprite.svg",
        svgo: true,
      },
      sprite: {
        prefix: false,
      }
    }),
    // Cake-Theme icons
    ...themes.map (theme => new SVGSpritemapPlugin(
        uniqueFileNames ([
          //Sort the icons by importance! (the last line overwrites all previous ones, if the name equals)
          ...glob.sync ('./assets/icons/!(_)**/!(_)*.svg'),
          ...glob.sync ('./themes/' + theme + '/assets/icons/!(_)*.svg'),
          ...glob.sync ('./themes/' + theme + '/assets/icons/!(_)**/!(_)*.svg'),
        ], '.svg'), {
        output: {
          filename: 'themes/' + theme + '/dist/images/icon__sprite.svg',
          svgo: true,
        },
        sprite: {
          prefix: false,
        }
    })).values (),
    // Cake theme documentation assets
    new SVGSpritemapPlugin(['./assets/icons/!(_)**/!(_)*.svg', './assets/icons/!(_)*.svg'], {
      output: {
        filename: "./docs/_assets/themes/Cake/assets/images/icon__sprite.svg",
        svgo: true,
      },
      sprite: {
        prefix: false,
      }
    }),
    new FileManagerPlugin ({
        onEnd: {
            copy: [
                ...themes.map (theme => ({ source: './themes/' + theme + '/assets/fonts', destination: path.resolve(__dirname, './themes/' + theme + '/dist/fonts') })).values (),
                ...themes.map (theme => ({ source: './themes/' + theme + '/assets/images', destination: path.resolve(__dirname, './themes/' + theme + '/dist/images') })).values (),

                { source: './assets/images/', destination: path.resolve(__dirname, './docs/_assets/themes/Cake/assets/images') },
                ...themes.map (theme => ({ source: './themes/' + theme + '/dist', destination: path.resolve(__dirname, './docs/_assets/themes/' + theme + '/assets') })).values (),
            ],
        }
    }),
    new FixStyleOnlyEntriesPlugin (),
];

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

module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './'),
    },
    context: path.join( __dirname, "./" ),
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.min\.css$/g,
        }),
      ]
    },
    entry: {
        //Dist assets
        ...getEntryFiles ("./js/*.js", "dist/js/"),
        ...getEntryFiles ("./scss/!(_)*.scss", "dist/css/"),

        //Cake theme documentation assets
        ...getEntryFiles ("./js/*.js", "docs/_assets/themes/Cake/assets/js/"),
        ...getEntryFiles ("./scss/!(_)*.scss", "docs/_assets/themes/Cake/assets/css/"),
        ...getEntryFiles ("./build/assets/*.js", "docs/_assets/", false),

        // Theme files
        ...themes.map (theme => ({
            ...getEntryFiles ("./themes/" + theme + "/js/*.js", "./themes/" + theme + "/dist/js/"),
            ...getEntryFiles ("./themes/" + theme + "/scss/!(_)*.scss", "./themes/" + theme + "/dist/css/"),
        })).reduce ((accumulator, currentValue) => ({ ...accumulator, ...currentValue})),
    },
    resolve: {
        modules: [
            path.resolve( "./" ),
            "node_modules"
        ],
        alias: absolutedAliases
    },
    module: {
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
                loader: "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
    },
    plugins,
    stats: 'errors-warnings', // 'errors-warnings', 'verbose'
};
