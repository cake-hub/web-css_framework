<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Footer

Use the footer to help the customer with additional information and navigation at the bottom of a website.

The footer can simply be created with any tag (as a best practice the `<footer>` tag is suggested to be used) and the equally named class `.footer` applied to it.
This will create a block element with a configurable background-color (`$footer-bg`) and text color (`$footer-color`) in `_variables.scss`.

## Parts of a footer

There are two reusable components to build a page footer.

### List

A `.footer-list` is simply a list of all possible links or menus on your website (i.e. sitemap, wishlist, shopping cart, account …).
Each footer-list contains a desired number of `.footer-list-item`s.
To apply the correct styling of the links in your footer-lists apply the class `.footer-list-item-link` to the `a` tags inside your `.footer-list-item`s.
Below you can find an example of how that could look like.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FooterWithoutHeadline.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FooterWithoutHeadline.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FooterWithoutHeadline](examples/FooterWithoutHeadline.html)

### Headline

Each footer list can be prepended with a headline. This headline can be any tag which seems semantically correct like a `<strong>` tag with the class `.footer-headline`. Why using strong is a good approach can be read at [\<strong\>: The Strong Importance element
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong). This element is not absolutely necessary for the setup of a footer, unless you want to title or organize your mainnavigation categories.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FooterDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FooterDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FooterDefault](examples/FooterDefault.html)


## Vertical arrangement

By default the footer-lists will be positioned horizontally (below each other). Alternatively, the footer can be arranged vertically (in columns instead of rows). In the examples below this happens only for the desktop and tablet (landscape) breakpoint. But the modifiers should only applied to the footer, if there are more than 3 main-navigation lists. This arrangement will make the footer easier to read and use when there is more content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/FooterVertical.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FooterVertical.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FooterVertical](examples/FooterVertical.html)

With these modifiers applied to the footer, a mixumum of 6 main-navigation lists can be added as shown below. If there is a need to change this stylings, you can simply modify and adjust the applied modifiers with the ones you need. How these modifiers work can be read in the related pages: [Grid system](../../Layout/Grid/Grid.md), [Spacing](../../Utilities/Spacing/Spacing.md), [Overview: Containers](../../Layout/Overview/Overview.md#containers) and [Text](../../Utilities/Text/Text.md).

<ContentRack
    fields='
        "preview": {
            "src": "examples/FooterVerticalMaximum.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/FooterVerticalMaximum.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![FooterVerticalMaximum](examples/FooterVerticalMaximum.html)

> ### Use modifiers over custom css
>
> When adjusting the footer to make it matching your project perfectly, be careful at creating **own style rules**. In most of the cases the **modifiers** (as listed above and many more) will fit your needs perfectly and you do not need to write one line of css/scss. If you still decide to write your own CSS, note the **break behaviour** of short links in the footer at different breakpoints!

## Accessibility

The footer component should always be rendered as a `<footer>` element. Additionally the landmark `role="contentinfo"` should be applied to identify the page footer as explained at [W3: Contentinfo Landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/contentinfo.html).
