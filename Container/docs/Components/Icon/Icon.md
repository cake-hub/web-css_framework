<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Icon

CAKE does include an icon library by default. All icons below are in the SVG  (including a title) because of the improved accessibility and vector support. SVG icons are scalable, the file size is very small and they are also modifiable through xml and css.


## Usage in general

You can use the standardised `svg` tag to display CAKE's svg-icons. To get the basic styling for correct presentation of the icons simply use the class `.icon` on the `svg` tag. Additionally you should add the [`xmlns="http://www.w3.org/2000/svg"`](https://developer.mozilla.org/de/docs/Web/SVG/Namespaces_Crash_Course) attribute, the correct role `img` and the `focusable` property. The last important thing you have to do, is to add a `use` element referencing to the [spritesheet](#spritesheet) of our icons with a valid icon reference like in the example below.

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconDefault](examples/IconDefault.html)


## Spritesheet

To use all the advantages of SVGs, we use a [icon-spritesheet](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) with our icons. It's as simple as a svg-file including many different icons in one file. This gives us the advantage of only having to load one resource from the server. Also we are able to color the icons with plain css and we get a better accessbility. The icon-sprite can be found under `dist/images/icon__sprite.svg`. It will be automatically generated using the npm package [svg-spritemap-webpack-plugin](https://github.com/cascornelissen/svg-spritemap-webpack-plugin) and the icon sources from `assets/icons`.

To use one icon out of this icon-sprite, you have to set the path to the `icon__sprite.svg` file inside the `use` tag and set the reference of the icon you want to display. For example you can display the `arrow-down` icon with the following `use` element inside your `svg` tag:

    <use xlink:href="/assets/images/icon__sprite.svg#arrow-down">

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconArrowDownExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconArrowDownExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconArrowDownExample](examples/IconArrowDownExample.html)

## Browser support

Most of the mordern and wide-spread browsers have a [native support](https://caniuse.com/#search=svg) of rendering svg files. Despite this some older browsers do not support svg-icons natively, especially when referencing to a seperate svg-file instead of inline-svg definitions. Therefore we have to use the polyfill [`svg4everybody`](https://github.com/jonathantneal/svg4everybody) which is already included by default in the `dist/js/cake.js` bundle. If you use your own JavaScript you should consider to use a similar polyfill.

## Icon sizing

By default (when only using the `.icon` class) the icon will scale to it's available space. To give you the ability to set up more concrete sizes, you can use one of the following classes additionally to the default `.icon` class (usage: `class="icon icon-XX"`). The number of these sizing classes represents the pixel value of the dimension. (These values are set as rem values.)

* `.icon-8` (height: 8px, width: 8px)
* `.icon-16` (height: 16px, width: 16px)
* `.icon-24` (height: 24px, width: 24px)
* `.icon-32` (height: 32px, width: 32px)

### Icon size 8 (.icon-8)

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconSizing8.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconSizing8.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconSizing8](examples/IconSizing8.html)

### Icon size 16 (.icon-16)

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconSizing16.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconSizing16.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconSizing16](examples/IconSizing16.html)

### Icon size 24 (.icon-24)

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconSizing24.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconSizing24.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconSizing24](examples/IconSizing24.html)

### Icon size 32 (.icon-32)

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconSizing32.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconSizing32.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconSizing32](examples/IconSizing32.html)


## Icon positioning

In some unique situations the default positioning of the icons does not work for the specific usage. Therefore there are some additional icon-classes that can be used to extend the default positioning of the `.icon` class.

### Button icons

When using icons inside of buttons you should add the class `.btn-icon`. With this class the icon will be positioned vertically centered.

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconButtonExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconButtonExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconButtonExample](examples/IconButtonExample.html)

### Vertical middle

The class `.icon-vertical-middle` can be used, if you want to position an icon next to some text while keep it vertically cetnered.

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconVerticalMiddleExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconVerticalMiddleExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconVerticalMiddleExample](examples/IconVerticalMiddleExample.html)

## Icon coloring

As a default the icon will be displayed using the text color of it's actual context. To change the color of the icon you can simply adjust the css attribute `color` to whatever value you want.

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconColoringExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconColoringExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconColoringExample](examples/IconColoringExample.html)

## Icons

You can use a bunch of prestyled icons that are available through our icon-sprite.

<ContentRack
    fields='
        "preview": {
            "src": "examples/IconSetAsTables.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/IconSetAsTables.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![IconSetAsTables](examples/IconSetAsTables.html)

## More icons

* The Lidl universe contains plenty of other icons that are not available in our design system and frontend framework.
* The naming of SVG files also differs from the Lidl standard because of the general usage of icons in our product.
* For more icons and further details log on to [brand.lidl](https://www.brand.lidl/site/login)

## Accessibility

There are some things you should be aware of when using svg images. To increase the accessibility you should always put a [`title`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title) tag explaining the content of the icon inside the `svg` tag. To give a even more detailed explanation you should consider to add a appropriate description with the [`desc`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) tag. These descriptions can be very context-dependent wherefore we did not added any description in our showroom. Furthermore you can also use the [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute to add some meaningful description for screenreaders and other helpful tools.
