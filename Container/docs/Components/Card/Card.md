# Cards

CAKE’s cards provide a flexible and extensible content container with multiple variants and options.

## About

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other CAKE components. They have no `margin` by default, so use [spacing utilities](../../Utilities/Spacing/Spacing.md) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardDefault](examples/CardDefault.html)

## Content types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what's supported.

### Body

The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardBody.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardBody.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardBody](examples/CardBody.html)

### Titles, text, and links

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardTitlesTextLinks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardTitlesTextLinks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardTitlesTextLinks](examples/CardTitlesTextLinks.html)

### Images

`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardImages.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardImages.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardImages](examples/CardImages.html)

### List groups

Create lists of content in a card with a flush list group.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardListGroups.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardListGroups.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardListGroups](examples/CardListGroups.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardListGroupsHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardListGroupsHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardListGroupsHeader](examples/CardListGroupsHeader.html)

### Kitchen sink

Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardKitchenSink.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardKitchenSink.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardKitchenSink](examples/CardKitchenSink.html)

### Header and footer

Add an optional header and/or footer within a card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardHeaderFooter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardHeaderFooter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardHeaderFooter](examples/CardHeaderFooter.html)

Card headers can be styled by adding `.card-header` to `<h*>` elements.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardHeaderHeadline.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardHeaderHeadline.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardHeaderHeadline](examples/CardHeaderHeadline.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardHeaderQuote.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardHeaderQuote.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardHeaderQuote](examples/CardHeaderQuote.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardHeaderFooterCenter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardHeaderFooterCenter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardHeaderFooterCenter](examples/CardHeaderFooterCenter.html)

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardGrid.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardGrid.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardGrid](examples/CardGrid.html)

### Using utilities

Use our handful of [available sizing utilities](../../Utilities/Sizing/Sizing.md) to quickly set a card's width.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardUtilities.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardUtilities.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardUtilities](examples/CardUtilities.html)

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardCustomCss.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardCustomCss.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardCustomCss](examples/CardCustomCss.html)


## Text alignment

You can quickly change the text alignment of any card—in its entirety or specific parts—with our [text align classes](../../Utilities/Text/Text.md#text-alignment).

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardTextAlignment.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardTextAlignment.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardTextAlignment](examples/CardTextAlignment.html)

## Images

Cards include a few options for working with images. Choose from appending "image caps" at either end of a card, overlaying images with card content, or simply embedding the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardImageCaps.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardImageCaps.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardImageCaps](examples/CardImageCaps.html)

### Image overlays

Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need additional styles or utilities.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardImageOverlays.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardImageOverlays.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardImageOverlays](examples/CardImageOverlays.html)

> Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.no-gutters` and use `.col-md-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardHorizontal.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardHorizontal.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardHorizontal](examples/CardHorizontal.html)

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Background and color

Use [text and background utilities](../../Utilities/Color/Color.md) to change the appearance of a card.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardBackgroundColor.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardBackgroundColor.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardBackgroundColor](examples/CardBackgroundColor.html)

> ## Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

### Border

Use [border utilities](../../Utilities/Border/Border.md) to change just the `border-color` of a card. Note that you can put `.text-{color}` classes on the parent `.card` or a subset of the card's contents as shown below.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardBorder.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardBorder.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardBorder](examples/CardBorder.html)

### Mixins utilities

You can also change the borders on the card header and footer as needed, and even remove their `background-color` with `.bg-transparent`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardMixins.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardMixins.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardMixins](examples/CardMixins.html)

## Card layout

In addition to styling the content within cards, CAKE includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use `display: flex;` to achieve their uniform sizing.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardGroups.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardGroups.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardGroups](examples/CardGroups.html)

When using card groups with footers, their content will automatically line up.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardGroupsFooter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardGroupsFooter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardGroupsFooter](examples/CardGroupsFooter.html)

### Card decks

Need a set of equal width and height cards that aren't attached to one another? Use card decks.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardDecks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardDecks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardDecks](examples/CardDecks.html)

Just like with card groups, card footers in decks will automatically line up.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardDecksFooter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardDecksFooter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardDecksFooter](examples/CardDecksFooter.html)

### Card columns

Cards can be organized into [Masonry](https://masonry.desandro.com/)-like columns with just CSS by wrapping them in `.card-columns`. Cards are built with CSS `column` properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

**Heads up!** Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to `display: inline-block` as `column-break-inside: avoid` isn't a bulletproof solution yet.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CardColumns.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CardColumns.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CardColumns](examples/CardColumns.html)

Card columns can also be extended and customized with some additional code. Shown below is an extension of the `.card-columns` class using the same CSS we use —CSS columns— to generate a set of responsive tiers for changing the number of columns.

    .card-columns {
      @include media-breakpoint-only(md) {
        column-count: 4;
      }
      @include media-breakpoint-only(lg) {
        column-count: 5;
      }
    }
