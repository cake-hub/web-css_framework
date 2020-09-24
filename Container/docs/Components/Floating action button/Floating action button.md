<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Floating action button

This button overlays the remaining page content. It sticks in a corner by scrolling the page.

## Usage

The floating action button is based on the default [button](../Button/Button.md) component. It use `.btn` class for basic styling and, in this example, `.btn-primary` for primary color.

This dependency on the button means that the button component must also be included in SCSS.

## Examples

<ContentRack
    fields='
        "preview": {
            "src": "examples/FloatingActionButtonDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FloatingActionButtonDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![AlertDefault](examples/FloatingActionButtonDefault.html)
