# Display property

Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all [breakpoints](../../Layout/Overview/Overview.md#responsive-breakpoints), from `xs` to `lg`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

* `.d-{value}` for `xs`
* `.d-{breakpoint}-{value}` for `sm`, `md` and `lg`.

Where *value* is one of:

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

The display values can be altered by changing the `$displays` variable and recompiling the SCSS.

The media queries effect screen widths with the given breakpoint *or larger*. For example, `.d-md-none` sets `display: none;` on both `md` and `lg` screens.

## Examples

<ContentRack
    fields='
        "preview": {
            "src": "examples/DisplayExamples1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/DisplayExamples1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![DisplayExamples1](examples/DisplayExamples1.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/DisplayExamples2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/DisplayExamples2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![DisplayExamples2](examples/DisplayExamples2.html)

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,md,lg}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-lg-none` will hide the element for all screen sizes except on medium and large devices.

| Screen Size        | Class |
| ---                |---|
| Hidden on all      | `.d-none` |
| Hidden only on xs  | `.d-none .d-sm-block` |
| Hidden only on sm  | `.d-sm-none .d-md-block` |
| Hidden only on md  | `.d-md-none .d-lg-block` |
| Hidden only on lg  | `.d-lg-none` |
| Visible on all     | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block` |

<ContentRack
    fields='
        "preview": {
            "src": "examples/DisplayHidingElements.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/DisplayHidingElements.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![DisplayHidingElements](examples/DisplayHidingElements.html)

## Display in print

Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities.

* `.d-print-none`
* `.d-print-inline`
* `.d-print-inline-block`
* `.d-print-block`
* `.d-print-table`
* `.d-print-table-row`
* `.d-print-table-cell`
* `.d-print-flex`
* `.d-print-inline-flex`

The print and display classes can be combined.

<ContentRack
    fields='
        "preview": {
            "src": "examples/DisplayPrint.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/DisplayPrint.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![DisplayPrint](examples/DisplayPrint.html)
