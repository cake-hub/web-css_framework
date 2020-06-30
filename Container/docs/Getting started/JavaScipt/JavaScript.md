# JavaScript

Bring CAKE to life with our optional JavaScript plugins built in vanilla JavaScript. Learn about each plugin, our data and programmatic API options, and more.

## Default settings

Some of our components provide you some interactive behavior created by our JavaScript libraries. These are all set up with some default settings, which should be just perfect in most of the cases.
To get our available JavaScript libraries working in your project all you have to do is, to import our JavaScript:

    <!-- choose youre theme -->
    <script src="dist/Lidl/js/cake.min.js"></script>
    <script src="dist/Schwarz/js/cake.min.js"></script>

If you have applied the correct data-attributes to your html, then this script will do all the rest for you.
It will call all our JavaScript libraries with our default settings and it has also imported all dependencies and so forth.

## Programmatic API

To override our default settings or if you want to use only one or multiple specific JavaScript libraries, you have to import them by your own.

    <script src="dist/Lidl/js/themeSlider.min.js"></script>
    <script src="dist/Lidl/js/popover.min.js"></script>

In this case you have to call the init-function by your own, so that the scripts start working. By calling the initialization functions, you can provide your own individual settings to these libraries as described in the respective component documentation.
When you have imported the required JavaScript libraries, you can access them via a special `cake`-object attatched to the `window` element:

    <script type="application/javascript">
        window.cake.themeSlider ({
            …individual settings
        });
        cake.popover ({
            …individual settings
        });
    </script>

> ### Do not import the `cake(.min).js` file
>
> If you want to use only some of our JavaScript libraries, you are not allowed to import the `cake(.min).js` file. This will cause some errors, because then all of the libraries would get initialized twice!
