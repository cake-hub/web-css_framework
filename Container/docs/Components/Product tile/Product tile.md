<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Product tile

To represent a Product the product tile component should be used. It is based on the [Card](../../Components/Card/Card.md) component and use image, title and text. So you have to **include the Card component CSS** to use the product tile.

Modifier classes represent the difference to Card component. If a modifier is used, a prefix to the original class is added. For example `.card` is original and `.product-tile-card` the modification.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ProductTileDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ProductTileDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![ProductTileDefault](examples/ProductTileDefault.html)


## Grid

You can use the default [Grid system](../../Layout/Grid/Grid.md) classes like in this example. Or you use the [Sass mixins](../../Layout/Grid/Grid.md#sass-mixins) to build custom classes.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ProductGridDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ProductGridDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![ProductGridDefault](examples/ProductGridDefault.html)
