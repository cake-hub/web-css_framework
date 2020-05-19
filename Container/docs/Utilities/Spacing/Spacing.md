<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Spacing

CAKE includes a wide range of shorthand responsive margin and padding utility classes to modify an element's appearance.

## How it works

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `.5rem` to `8rem`.

## Notation

Spacing utilities that apply to all breakpoints, from `xs` to `lg`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md` and `lg`.

Where *property* is one of:

* `m` \- for classes that set `margin`
* `p` \- for classes that set `padding`

Where *sides* is one of:

* `t` \- for classes that set `margin-top` or `padding-top`
* `b` \- for classes that set `margin-bottom` or `padding-bottom`
* `l` \- for classes that set `margin-left` or `padding-left`
* `r` \- for classes that set `margin-right` or `padding-right`
* `x` \- for classes that set both `*-left` and `*-right`
* `y` \- for classes that set both `*-top` and `*-bottom`
* blank \- for classes that set a `margin` or `padding` on all 4 sides of the element

For the *size* you have to look at the horizontal and vertical spaces separately. While the horizontal spaces are available in 17 different *sizes* (`0`, `1`, `2` ... `14`, `15`, `16`), for the vertical spaces there are only 6 different sizes (`0`, `1`, `2`, `4`, `8`, `16`). The `margin` and `padding` on all 4 sides behaves exactly like the vertical spaces.

Where *size* for *sides* `l`, `r`, `x` is one of:

* `0` \- for classes that eliminate the `margin` or `padding` by setting it to `0`
* `1` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 1`
* `2` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 2`
* `3` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 3`
* `4` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 4`
* `5` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 5`
* `6` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 6`
* `7` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 7`
* `8` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 8`
* `9` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 9`
* `10` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 10`
* `11` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 11`
* `12` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 12`
* `13` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 13`
* `14` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 14`
* `15` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 15`
* `16` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 16`
* `auto` \- for classes that set the `margin` to auto

Where *size* for *sides* `t`, `b`, `y`, `m` is one of:

* `0` \- for classes that eliminate the `margin` or `padding` by setting it to `0`
* `1` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 1`
* `2` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 2`
* `4` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 4`
* `8` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 8`
* `16` \- (by default) for classes that set the `margin` or `padding` to `$spacer * 16`
* `auto` \- for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

## Examples

Here are some representative examples of these classes:

    .mt-0 {
      margin-top: 0 !important;
    }

    .ml-1 {
      margin-left: ($spacer * 1) !important;
    }

    .px-2 {
      padding-left: ($spacer * 2) !important;
      padding-right: ($spacer * 2) !important;
    }

    .p-4 {
      padding: ($spacer * 4) !important;
    }

### Horizontal centering

Additionally, CAKE also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/SpacingHorizontalCentering.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SpacingHorizontalCentering.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SpacingHorizontalCentering](examples/SpacingHorizontalCentering.html)

### Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). We've added negative margin utilities for every non-zero integer size listed above (horizontal: `1`, `2` ... `15`, `16`; vertical: `1`, `2`, `4`, `8`, `16`). These utilities are ideal for customizing grid column gutters across breakpoints.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here's an example class that's the opposite of `.mt-1`:

    .mt-n1 {
      margin-top: -0.5rem !important;
    }

Here's an example of customizing the CAKE grid at the medium (`md`) breakpoint and above. We've increased the `.col` padding with `.px-md-5` and then counteracted that with `.mx-md-n5` on the parent `.row`.

#### Negative margin

<ContentRack
    fields='
        "preview": {
            "src": "examples/SpacingNegativeMargin.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SpacingNegativeMargin.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![SpacingNegativeMargin](examples/SpacingNegativeMargin.html)
