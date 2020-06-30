<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Popover

Documentation and examples for adding CAKE popovers to any element on your site.

## Overview

CAKEs popovers rely on the 3rd party library [**Tippy.js**](https://github.com/atomiks/tippyjs) in version [**6.2.3**](https://atomiks.github.io/tippyjs/v6/getting-started/).

### JavaScript

You have to include `popover.js` which already contains `tippy.js` in order for popover to work!

### Styling

And you have to include the CSS from `~tippy.js/dist/tippy` for basic styling. We also use a outline for the popovers. Import the `~tippy.js/dist/border` for a outlined styling. And we provide a customizable theme for it. Include also the `popover.scss` SCSS file and you can configure the styling in `variables.scss`.

```scss
@import "~tippy.js/dist/tippy";
@import "~tippy.js/dist/border";

@import "~@cake/web/scss/popover";
```

The popover will show up by focusing/hovering above a certain element. If the element loses focus/mouseover the popover will fade out with a slight delay of `200ms`. Because of the missing hover effect on handhelt devices, the popover will be shown on a click on the element.
To define the content of the popover set the `data-tippy-content` property on this element.
<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverDefault](examples/PopoverDefault.html)

*In the examples on this page, [spacing utilities](../../Utilities/Spacing/Spacing.md) are used to make the display clearer.*

## Placement

You have the possibility to adjust the placement of the popover with additional data-attributes.

The popovers can be placed on any side of the dependent element. Therefore you simply have to add the `data-tippy-placement` attribute with one of the values `top`, `bottom`, `left`, `right`. With these configurations the popover will stick to the side you've set up, as long as there is enough space for it. Otherwise the popover will flip to the position needed.
<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverPlacement.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverPlacement.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverPlacement](examples/PopoverPlacement.html)

### Extended positioning

In addition to the `data-tippy-placement="{position}"` you can add a suffix to the position like `-start` or `-end`. As a default the popover will be placed vertically or horizontally centerd next to the element, when there is enough space for it. If you add one of the above suffixes, you can move the popover to the edge of the start of the element (`-start`) or to the other edge (`-end`).
<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverPlacementExtended.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverPlacementExtended.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverPlacementExtended](examples/PopoverPlacementExtended.html)

## Contents and elements

Despite the placement you have some more options regarding the content and the dependent element of the popover.

### Custom content

You can for example also add html-content to the popover. As default the popover content will be escaped to prevent [cross-site scripting (xss)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) but you can enable the parsing of html-content inside the popover by setting the data-attribute `data-tippy-allowHTML="true"`. Below there are two examples showing the possibilities of html-content inside a popover.

> #### Keep content minimal
>
> Please be careful with custom content and keep it at the lowest required minimum! Otherwise the User-Experience can significantly be impaired!

<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverCustomContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverCustomContent.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverCustomContent](examples/PopoverCustomContent.html)

### Custom elements

As already mentioned above, you can add a popover to any valid html element. Therefore you just have to add at least the `data-tippy-content` to the desired element as shown below. It's recommended that you sould only use focusable elements like form elements or links in combinations with popovers to make it accessible.
<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverCustomElement.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverCustomElement.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverCustomElement](examples/PopoverCustomElement.html)

## Colors

The popover will show up in white "cake" theme as a default. The white color fits perfectly for the purpose of popovers.

> ### Avoid usage of themes
>
> Since these should enable the display of further information inconspicuously, the cake theme is ideally suited by the neutral representation and you should aviod using other themes wherever it is possible.

Nevertheless you can use any `$theme-color` as theme for the popover. To get the stylings below, simply add the `data-tippy-theme` attribute with the color name as value.
<ContentRack
    fields='
        "preview": {
            "src": "examples/PopoverColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PopoverColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PopoverColors](examples/PopoverColors.html)

## Javascript

In the examples above the popovers are always initialized by setting data-attributes to the despite elements. This is one method to create popovers.
In order to make this work on, you have to initialize these popovers by including the script `popover.js` at the very end of your html page and calling the method:

```js
popover ();
```

When calling the method above like this, the default settings will be used and therefore all elements with the data-attribute `data-tippy-content` will be initialized with their attatched `data-tippy-*` attributes. The popover method takes two optional arguments to customize the popovers according your needs.

* elements (default `*[data-tippy-content]`)
* globalConfiguration

The first argument **elements** can be a `String` corresponding to any valid CSS selector, a single `Element`, an Array of `Elements[]` or a `NodeList`.
All elements matching the **elements** property will automatically be extended by a popover. The second argument **globalConfiguration** takes an `Object{}` with much more customization options than described above. Below you will find more details about the popover configuration.
The method `popover(…)` will return one **tippy** instance or multiple inside an `Array[]` if there are more than one element selected. More about the [Tippy Instance](https://atomiks.github.io/tippyjs/v6/tippy-instance/) can be found in the Tippy.js documentation.


### All Options

The **globalConfiguration** argument can be configured with any option from the [Tippy.js Documentation](https://atomiks.github.io/tippyjs/). A full list of all the options provided by Tippy.js can be found [here](https://atomiks.github.io/tippyjs/v6/all-props/). The default configuration set by CAKE is listed below:

```js
{
    theme: "cake",
    placement: 'top',
    popperOptions: {
        positionFixed: true,
        modifiers: [
            {
                name: 'flip',
                enabled: true,
                options: {
                    fallbackPlacements: ['bottom'],
                },
            },
        ],
    },
    interactive: true,
    delay: 200,
    appendTo: 'parent',
    onMount({ reference }) {
        reference.setAttribute('aria-expanded', 'true')
    },
    onHide({ reference }) {
        reference.setAttribute('aria-expanded', 'false')
    },
}
```

### Methods

The popover instance provides mutliple methods, which can be used programmatically to provide you more control and possibilities. Here is the complete [list of methods](https://atomiks.github.io/tippyjs/v6/methods/).

## Accessibility

The package Tippy.js provides basic functionalities to ensure basic accessibility standards. To dive deeper into that topic, you should definitely read the [Accessibility section on Tippy.js](https://atomiks.github.io/tippyjs/v6/accessibility/).
