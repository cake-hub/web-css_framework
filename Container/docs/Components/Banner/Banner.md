<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Banner

The banner consists of an image, a title and a subheadline.

To create an banner you have to apply the classes `.card` and `.banner-card` to any element or like in our examples to an `<article>` element, to semantically describe a self-contained composition ([MDN: The Article Contents element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)).

The banner component **depends on the [Card](../Card/Card.md) component** and uses `.card`, `.card-img` and `.card-img-overlay`. So you have to include the Card component Sass to use the banner component.


## Simple Banner

Only the image is obligatory which means all the other parts of a banner can optionally be added or removed. To apply the correct styling to the image use the `.card-img` class.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerWithoutHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerWithoutHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerWithoutHeader](examples/BannerWithoutHeader.html)


## Banner with bar

The default banner will have a dark bar with light text as an overlay of the image. The content of the subheadline and title should be kept as short as possible.

The bar of the banner can be created with any element like the `<header>` element with the css classes `.banner-container` and `.container-responsive` applied to it. Inside wrapper element you have to create another element with the attatched classes `.card-img-overlay` and `.banner-card-img-overlay`. Inside these wrapper elements you can put the title `.banner-card-title` and / or subheadline `.banner-card-subhead` of the banner.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerDefault](examples/BannerDefault.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerWithSubhead.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerWithSubhead.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerWithSubhead](examples/BannerWithSubhead.html)


## Banner with light bar

The light bar banner has an inverted styling of the default variant. This means a white bar with dark text on it. To use this styling simply add the `.banner-card-light` to the root element of an banner. You must decide whether you want to use the standard or the light version, depending on which image the banner uses.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BannerLight.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BannerLight.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BannerLight](examples/BannerLight.html)
