<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Section Head

Documentation and examples for CAKE's section head. This component is used to seperate different sections. The header level should be set according the context this component will be used in.

## Example

<ContentRack
    fields='
        "preview": {
            "src": "examples/SectionHeadDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SectionHeadDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SectionHeadDefault](examples/SectionHeadDefault.html)

The `header` and `h2` element in the example above can be relpaced with every valid html-element like a `div` or `span`.
