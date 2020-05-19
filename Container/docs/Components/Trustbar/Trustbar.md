<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Trustbar

The trustbar component is used to show unique selling propositions, services or other outstanding benefints.

## Usage

The trustbar is a unordered list element (`<li>`) with the required classes applied to the elements. Each list item should have one icon and a short concise statement.

### Trustbar with 4 items

<ContentRack
    fields='
        "preview": {
            "src": "examples/TrustbarFourItems.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TrustbarFourItems.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TrustbarFourItems](examples/TrustbarFourItems.html)

The Trustbar is intended for three to four items. On `xs` the items are always arranged among each other. With `sm` resolution 4 items are arranged in two rows with two items each. With 3 items, the third is arranged in the middle of the second row. Starting from `md` all items are next to each other in one line.

### Trustbar with 3 items

<ContentRack
    fields='
        "preview": {
            "src": "examples/TrustbarThreeItems.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TrustbarThreeItems.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TrustbarThreeItems](examples/TrustbarThreeItems.html)

## Inactive Trustbars

If you do not want to link a trustbar item to another resource, you can simply swap the `<a>` element with a `<span>` element. Accordingly there will be no `cursor: pointer` event and the element is not click- or focusable at all.

### Trustbar without links

<ContentRack
    fields='
        "preview": {
            "src": "examples/TrustbarNoLinks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TrustbarNoLinks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TrustbarNoLinks](examples/TrustbarNoLinks.html)

You can mix the clickable and non-clickable elements within one trustbar.

### Trustbar with links and without links

<ContentRack
    fields='
        "preview": {
            "src": "examples/TrustbarMixed.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TrustbarMixed.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TrustbarMixed](examples/TrustbarMixed.html)

If the content of the trustbar-item exceeds the width, the text will be [truncated](../../Utilities/Text/Text.md#text-wrapping-and-overflow) with `text-overflow: ellipsis`.

### Trustbar with truncated content

<ContentRack
    fields='
        "preview": {
            "src": "examples/TrustbarExceededContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TrustbarExceededContent.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TrustbarExceededContent](examples/TrustbarExceededContent.html)
