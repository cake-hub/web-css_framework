<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Tables

Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins).

## Examples

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we’ve designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

All table styles are inherited in CAKE, meaning any nested tables will be styled in the same manner as the parent.

### Default table

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableDefault](examples/TableDefault.html)

### Table with column-header

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableWithColumnHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableWithColumnHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableWithColumnHeader](examples/TableWithColumnHeader.html)

### Table with row-header

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableWithRowHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableWithRowHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableWithRowHeader](examples/TableWithRowHeader.html)

### Table with multiple headers

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableWithMultipleHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableWithMultipleHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableWithMultipleHeader](examples/TableWithMultipleHeader.html)


## Striped rows or cols

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`. The rows will be striped in the horizontal direction.
To create the zebra-striping in the vertical orientation simply use `.table-striped-v`.

### Table with vertical background

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableWithVerticalBackground.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableWithVerticalBackground.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableWithVerticalBackground](examples/TableWithVerticalBackground.html)

### Table with horizontal background

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableWithHorizontalBackground.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableWithHorizontalBackground.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableWithHorizontalBackground](examples/TableWithHorizontalBackground.html)


## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a `.table` with `.table-responsive`. Or, pick a maximum breakpoint with which to have a responsive table up to by using `.table-responsive{-sm|-md|-lg|-xl}`.

### Responsive table

<ContentRack
    fields='
        "preview": {
            "src": "examples/TableResponsive.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TableResponsive.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TableResponsive](examples/TableResponsive.html)

> ### Vertical clipping/truncation
>
> Responsive tables make use of `overflow-y: hidden`, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.

### Always responsive

Across every breakpoint, use `.table-responsive` for horizontally scrolling tables.

```html
<div class="table-responsive">
    <table class="table">
        ...
    </table>
</div>
```

### Breakpoint specific

Use `.table-responsive{-sm|-md|-lg|-xl}` as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

**These tables may appear broken until their responsive styles apply at specific viewport widths.**

```html
<div class="table-responsive-sm">
    <table class="table">
        ...
    </table>
</div>
```
