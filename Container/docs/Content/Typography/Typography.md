<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Typography

Documentation and examples for CAKE typography, including global settings, headings, body text, lists, and more.

## Global settings

CAKE sets basic global display, typography, and link styles. When more control is needed, check out the textual utility classes.

* For a more inclusive and accessible type scale, we assume the browser default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
* Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
* Set the global link color via `$link-color` and apply link underlines only on `:hover`.
* Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`. Make sure to set `$font-size-base` in `rem`.

## Font weight

The regular `font weight: 400` uses LidlFontCondPro-Regular. We use semi-bold font variant for bold styling. Please use `font-weight: 600` for bold style. To be able to use also `font-weight: bold`, we match the semi-bold font variant also to the `font-weight: 700` value. We prefere to use the `600` value instead of `bold`. If you use Sass you can use the `$font-weight-bold` variable which also has a value of `600`.

The LidlFontCondPro-Bold is available in `font-weight: 800` extra-bold styling for the [Pricebox](../Pricebox/Pricebox).

## Headings

All HTML headings, `<h1>` through `<h5>`, are available.

![TypographyHeadlines](examples/TypographyHeadlines.html)

### Links

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyLinks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyLinks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyLinks](examples/TypographyLinks.html)

### Lists

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyLists.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyLists.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyLists](examples/TypographyLists.html)

### Unstyled list

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyListsUnstyled.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyListsUnstyled.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyListsUnstyled](examples/TypographyListsUnstyled.html)


## Responsive font sizes

CAKE ships with the option to enable responsive font sizes, allowing text to scale more naturally across device and viewport sizes. <abbr title="Responsive font sizes">RFS</abbr> can be enabled by changing the `$enable-responsive-font-sizes` Sass variable to `true` and recompiling CAKE.

To support <abbr title="Responsive font sizes">RFS</abbr>, we use a Sass mixin to replace our normal `font-size` properties. Responsive font sizes will be compiled into `calc()` functions with a mix of `rem` and viewport units to enable the responsive scaling behavior. More about <abbr title="Responsive font sizes">RFS</abbr> and its configuration can be found on its [GitHub repository](https://github.com/twbs/rfs).

## custom fonts and $fonts-to-load

If you need to add new fonts please use the variable `$fonts-to-load`. With this variable it is possible to generate a complete set of fonts. It is a comma seperated list of font properties. The properties representing a string list of params like: `font family name`, `file name`, `font weight (default: normal)`, `font style (default: normal)`, `font path (defaulted by the variable $font-path)`. A mixin is generating the `@font-face`'s. You don't have to use all 5 properties every time, at least the first two parameters are required.

    $fonts-to-load:     LidlFontCondPro LidlFontCondPro-Regular,
                        LidlFontCondPro LidlFontCondPro-Semibold 600,
                        LidlFontCondPro LidlFontCondPro-Semibold 700, // to match with `bold`
                        LidlFontCondPro LidlFontCondPro-Bold 800; // to match with `extra bold`

Mixed fonts are also possible:

    $fonts-to-load:     MyFont MyFontCondPro-italic notmal italic "../myFonts/",
                        Roboto roboto-v19-latin-regular,
                        Roboto roboto-v19-latin-700 700;
