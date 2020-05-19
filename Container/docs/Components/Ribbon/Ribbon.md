<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Ribbon

Ribbons can be used to add unique selling prepositions or other informations. The ribbons can be used inside product tiles, teasers or images.

## Ribbon colors

<ContentRack
    fields='
        "preview": {
            "src": "examples/RibbonColors.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RibbonColors.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RibbonColors](examples/RibbonColors.html)

There are several [theme colors](../../Utilities/Color/Color.md#definition-of-colors-in-cake) for the ribbons. As default the ribbon should have the `.ribbon-item-primary` class applied to it. For informations that should be highlighted more offensively you can use `.ribbon-item-danger` (In this case the danger color is used for **highlighting** not for errors!). Additionally you can use the styling `.ribbon-item-gray` for your ribbons.

Apart from the variants shown above, the ribbons are available in any theme color. Therefore the classes `.ribbon-item-success` and `.ribbon-item-warning` can be used as well, which are not CI conform.

## Multiple ribbons

<ContentRack
    fields='
        "preview": {
            "src": "examples/RibbonMultiple.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RibbonMultiple.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RibbonMultiple](examples/RibbonMultiple.html)

If there is a need to highlight more pieces of informations, you can add multiple ribbons items inside one ribbon. As a recommandation you should not use more than two ribbon items inside one ribbon.
Also the ribbon should not exceed the `50%` of the parents `width`. *Nevertheless you can change this value in the `variables.scss` with the configuration variable `$ribbon-max-width: 50%`.*

## Ribbons with image

<ContentRack
    fields='
        "preview": {
            "src": "examples/RibbonImage.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RibbonImage.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RibbonImage](examples/RibbonImage.html)

As an alternative you can also use images inside a ribbon. When using images make sure to add the class `.img-fluid` to the image element to prevent the image from exceeding the parents `width`. This class will add `max-width: 100%` and `height: auto` to the image element.

## Ribbon example on product tile and teaser

<ContentRack
    fields='
        "preview": {
            "src": "examples/RibbonExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RibbonExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![RibbonExample](examples/RibbonExample.html)

This is an example how the ribbon is used on a product tile or teaser. It overlap the component on the right side.

> ### Wrapper element position
>
> Please be aware, that the ribbon is `absolute` positioned and therefore the wrapper element should have `position: relative` applied to it! Otherwise the ribbon element will be positioned to the next outer element with `relative` position which will be the body element in worst case.

