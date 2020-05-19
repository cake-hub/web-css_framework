<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Teaser

The teaser consists of an image, a title and a subheadline.

To create an teaser you have to apply the classes `.card` and `.teaser-card` to any element or like in our examples to an `<article>` element, to semantically describe a self-contained composition ([MDN: The Article Contents element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)).

The teaser component **depends on the [Card](../Card/Card.md) component** and uses `.card`, `.card-img` and `.card-img-overlay`. So you have to include the Card component Sass to use the teaser component.


## Default Teaser

Only the image is obligatory which means all the other parts of a teaser can optionally be added or removed. The image can be any image with preferably a 4:3 ratio. To apply the correct styling to the image use the `.card-img` class.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserDefault](examples/TeaserDefault.html)


## Linked Teaser

To link the teaser, you have to add a `<a>` tag with the class `.teaser-card-link` as a child to the teaser-element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserLinked.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserLinked.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserLinked](examples/TeaserLinked.html)


## Teaser with bar

The default teaser will have a dark bar with light text as an overlay of the image. The content of the subheadline and title should be kept as short as possible.

The bar of the teaser can be created with any element like the `<header>` element with `.card-img-overlay` and `.teaser-card-img-overlay`. Inside this wrapper element you can put the title `.teaser-card-title` and / or subheadline `.teaser-card-subhead` of the teaser.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserTitle.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserTitle.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserTitle](examples/TeaserTitle.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserTitleSubheadline.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserTitleSubheadline.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserTitleSubheadline](examples/TeaserTitleSubheadline.html)


## Teaser with light bar

The light bar teaser has inverted styling of the default variant. This means a white bar with dark text on it. To use this styling simply add the `.teaser-card-light` to the root element of an teaser. You must decide whether you want to use the standard or the light version, depending on which image the teaser uses.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserLight.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserLight.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserLight](examples/TeaserLight.html)


## Teaser inside a grid

To get started easily below is an example of how to use the teasers with our [grid](../../Layout/Grid/Grid.md). This example can be changed to whatever you need in your project.

### 3 cols

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserGrid3.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserGrid3.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserGrid3](examples/TeaserGrid3.html)

### 4 cols

<ContentRack
    fields='
        "preview": {
            "src": "examples/TeaserGrid4.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TeaserGrid4.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TeaserGrid4](examples/TeaserGrid4.html)
