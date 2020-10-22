# Sizing

Easily make an element as wide or as tall with our width and height utilities.

## Relative to the parent

Width and height utilities are generated from the `$sizes` Sass map in `_variables.scss`. Includes support for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different utilities here.

### Sizing the width

<ContentRack
    fields='
        "preview": {
            "src": "examples/SizingWidth.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SizingWidth.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SizingWidth](examples/SizingWidth.html)

### Sizing the height

<ContentRack
    fields='
        "preview": {
            "src": "examples/SizingHeight.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SizingHeight.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SizingHeight](examples/SizingHeight.html)

You can also use `max-width: 100%;` and `max-height: 100%;` utilities as needed.

### max-width

<ContentRack
    fields='
        "preview": {
            "src": "examples/SizingMaxWidth.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SizingMaxWidth.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SizingMaxWidth](examples/SizingMaxWidth.html)

### max-height

<ContentRack
    fields='
        "preview": {
            "src": "examples/SizingMaxHeight.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SizingMaxHeight.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SizingMaxHeight](examples/SizingMaxHeight.html)

## Relative to the viewport

You can also use utilities to set the width and height relative to the viewport.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```
