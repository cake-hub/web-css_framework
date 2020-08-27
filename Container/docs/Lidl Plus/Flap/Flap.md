<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Flap

It might make sense to use the `.hyphens` [utility](../../Utilities/Text/Text.md#word-separation) to change the text behaviour on line breaks. This can be optionally added to the `.flap`, `.flap-content` or `.flap-text` class position.

## Examples

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlapExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlapExample.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![FlapExample](examples/FlapExample.html)

To get an specific thin style, make use of `<br>` in the content of the `.flap-text` element.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FlapInElements.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FlapInElements.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FlapInElements](examples/FlapInElements.html)

> ## Wrapper element position
>
> Please be aware, that the flap is `absolute` positioned and therefore the wrapper element should have `position: relative` applied to it! Otherwise the flap element will be positioned to the next outer element with `relative` position which will be the body element in worst case.
