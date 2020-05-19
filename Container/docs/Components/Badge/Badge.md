<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Badge

Documentation and examples for badges, our small count and labeling component.

> The frontend implementation differs slightly from the design. We are using a `line-height: 1;` and rounded values for padding top and bottom, for more durability in all browsers and for all fonts. The missing space from the line-height is added to the padding top and bottom within SCSS. Use the variable `$badge-line-height` to set the right line height. See the mixin `badge-padding-y` if you want to reproduce our calculations.

## Sizes

There are three different sizes of the badge, that can be used. The default badge has the "basic" `font-size`. The `.badge-large` has the "large" font-style and the `.badge-small` has the "small" font-style. It's recommended to use the "large" variant for level 1 headlines, for the levels 2 - 4 the "basic" variant and for the levels below the "small" variant.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BadgeSize.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BadgeSize.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BadgeSize](examples/BadgeSize.html)


## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge. There is a modifier-class for all `$theme-colors`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BadgeColor.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BadgeColor.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BadgeColor](examples/BadgeColor.html)

> ### Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.


## Addon badges

Use the `.badge-addon` modifier class to make badges even smaller. This variant is perfect for discreet counters like in the [header's usernavigation](../Header/Header.md).

<ContentRack
    fields='
        "preview": {
            "src": "examples/BadgeAddon.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BadgeAddon.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BadgeAddon](examples/BadgeAddon.html)

## Accessibility

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence or a link.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "9" is the number of notifications), consider including additional context with a visually hidden piece of additional text like in the following example.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BadgeAccessibility.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BadgeAccessibility.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BadgeAccessibility](examples/BadgeAccessibility.html)

## Links

Using the contextual `.badge-*` classes on an `<a>` element quickly provide actionable badges with hover and focus states.

<ContentRack
    fields='
        "preview": {
            "src": "examples/BadgeLinks.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BadgeLinks.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BadgeLinks](examples/BadgeLinks.html)
