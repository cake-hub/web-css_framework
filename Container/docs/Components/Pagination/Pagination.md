<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Pagination

Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes and use a proper `title` tag for svg-icons.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PaginationDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PaginationDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PaginationDefault](examples/PaginationDefault.html)

## Different variants

You can also show paginations with more or less than five items. For example you can only show the arrow-items or add more than three page-links.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PaginationVariants.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PaginationVariants.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PaginationVariants](examples/PaginationVariants.html)

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `.disabled` class uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, you should always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

<ContentRack
    fields='
        "preview": {
            "src": "examples/PaginationDisabledActiveState.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PaginationDisabledActiveState.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PaginationDisabledActiveState](examples/PaginationDisabledActiveState.html)

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

### Pagination with span instead of link for disabled and active states

<ContentRack
    fields='
        "preview": {
            "src": "examples/PaginationWithoutLink.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/PaginationWithoutLink.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![PaginationWithoutLink](examples/PaginationWithoutLink.html)
