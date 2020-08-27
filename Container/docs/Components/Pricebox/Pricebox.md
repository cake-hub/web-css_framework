<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Pricebox

A price field contains information about the price of a product and may vary according to content, styling and context.

## Standard Pricebox

A default pricebox can contain any informations that are legally and organizational required like the **price** itself, a **prefix**, **asterisk**, **currency** and **additional informations** like the basic quantity.

The pricebox is created with any semantically valid tag with the class `.pricebox` applied to it. The pricebox then has the display-property `display: inline-block`. With this property you can place the pricebox inline to any element you'd like to. But please consider, that the pricebox will have as a default the maximum width of the parents size. If the price would exceed this width, the pricebox will overflow because the price can't break by configuration. Otherwise the sensitive price may no longer be legible.

The price itself is wrapped by three elements with the classes `.pricebox-wrapper`, `.pricebox-container` and `.pricebox-price-wrapper`. Inside the `.pricebox-price-wrapper` element there can be an

* prefix (`.pricebox-prefix`)
* price (`.pricebox-price`)
* asterisk (`.pricebox-asterisk`)
* currency (`.pricebox-currency`)

To get the correct structure, the asterisk and currency has to be wrapped by an additional element with `.pricebox-suffix`.
All the contents of the above elements should be short and expressive, otherwise the pricebox could break on small screen-sizes.

To show even more information you can use the element `.pricebox-basic-quantity` which should be placed after the `.pricebox-wrapper`.

> We recommended to add an `aria-label` to the `.pricebox-price-wrapper` and fill it with the price informations (prefix, price, currency, asterisk) for accessibility reasons.

For more information, see the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#no_aria_better_bad_aria).

### standard small

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxStandard.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxStandard.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxStandard](examples/PriceboxStandard.html)

### minimum variant

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxMinimum.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxMinimum.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxMinimum](examples/PriceboxMinimum.html)

### prefix

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxPrefix.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxPrefix.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxPrefix](examples/PriceboxPrefix.html)

### asterisk

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxAsterisk.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxAsterisk.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxAsterisk](examples/PriceboxAsterisk.html)

### currency

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxCurrency.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxCurrency.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxCurrency](examples/PriceboxCurrency.html)

### basic quantitiy

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxBasicQuantity.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxBasicQuantity.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxBasicQuantity](examples/PriceboxBasicQuantity.html)

### custom values

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxCustom.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxCustom.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxCustom](examples/PriceboxCustom.html)

### pricebox in product-tile

Such a pricebox fits perfectly into an product tile like in the following example. To align the pricebox to the right of the element, simply the attribute `text-align: right` can be set.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxProductRow.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxProductRow.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![PriceboxProductRow](examples/PriceboxProductRow.html)

Of course the pricebox has a modular structure which gives you the possibility to remove or add any element with any combination possible.

## Highlight Pricebox

To highlight promotions or discounts, you can place a element with the class `.pricebox-highlight` before the `.pricebox-price-wrapper` as an child of the `.pricebox-wrapper`.

You can choose different colors by adding one of the following classes to the root element `.pricebox`. To get the correct style, you need at least one of them:

* action (`.pricebox-with-highlight-action`)
* offer (`.pricebox-with-highlight-offer`)
* info (`.pricebox-with-highlight-info`)

### theme action

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxHightlightAction.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxHightlightAction.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxHightlightAction](examples/PriceboxHightlightAction.html)

### theme offer

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxHightlightOffer.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxHightlightOffer.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxHightlightOffer](examples/PriceboxHightlightOffer.html)

### theme info

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxHightlightInfo.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxHightlightInfo.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxHightlightInfo](examples/PriceboxHightlightInfo.html)

## Discount

The discount informations are seperatet in two elements:

* the info text (`.pricebox-discount`)
* the old price, which is shown as strikethrough (`.pricebox-recommended-retail-price`)

They are seperated by at least one space. Both are wrapped by `.pricebox-discount-wrapper`, which is part of `.pricebox-container`.

> Please note, that we add an element with the class `sr-only` (screen reader only) to the `.pricebox-recommended-retail-price` element.
> Use this to clarify the RRP to screen reader users (The strikethrough is not mentioned by screen readers.).

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxDiscount.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxDiscount.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxDiscount](examples/PriceboxDiscount.html)

## Negative

You are able to negate the colors of the pricefield to generate more attation by adding the class `.pricebox-negative` to the `.pricebox` element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxNegative.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxNegative](examples/PriceboxNegative.html)

## Sizes

There are different sizes of the standard pricebox.

* The **small** variant above is mostly used on the product tile.
* The **medium** variant on product detail page.

To get the **medium** variant simply add `.pricebox-medium` to the `.pricebox` element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxStandardMedium.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxStandardMedium.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxStandardMedium](examples/PriceboxStandardMedium.html)

## All together

<ContentRack
    fields='
        "preview": {
            "src": "examples/PriceboxMaximalism.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PriceboxMaximalism.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PriceboxMaximalism](examples/PriceboxMaximalism.html)
