<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Colors

Convey meaning through color with a handful of color utility classes.

## Definition of colors in CAKE

In `$theme-colors` are the basic colors of this library already pre-defined. You can easily add other (theme-)colors to this list by providing a logical name and a color definition for these. There are as a default multiple different colors available.

* primary
* success
* info
* warning
* danger
* gray

Adding for example wine as theme could look like this:

    $theme-colors: (
        'primary': purple
    )

This will automatically extend the below classes with your (theme-)color in the same way as there exists a primary-color.

Every base-color has different color-levels specified in `$gradations`. As the default there are multiple different color-levels:

* background (`4%` base-color with white overlay)
* lightest (`8%` base-color with white overlay)
* lighter (`16%` base-color with white overlay)
* light (`32%` base-color with white overlay)
* base (`100%` base-color without overlay)
* dark (`(-)16%` base-color with black overlay)
* darker (`(-)32%` base-color with black overlay)
* darkest (`(-)64%` base-color with black overlay)

With positive percentuage values, the base-color will be mixed with a white color. The number defines how much the base color shines through. The same will work with negative numbers, but the color mixed with will be black instead of white!
[Learn more about our Sass functions options.](../../Getting started/Theming.md#functions)

## Color

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorText.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ColorText.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorText](examples/ColorText.html)

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Background utilities **do not set** color, so in some cases you’ll want to use `.text-*` utilities.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorBackground.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ColorBackground.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorBackground](examples/ColorBackground.html)

## Background gradient

You’ll be able to use `.bg-gradient-*` utility classes.
`$enable-gradients` will have no affect on these colors, so the gradients can be used even if the gradients are disabled in `_variables.scss`! [Learn about our Sass options](../Getting started/Theming.md#sass-options) to enable gradients for all elements and more.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorBackgroundGradient.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ColorBackgroundGradient.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorBackgroundGradient](examples/ColorBackgroundGradient.html)


> ## Dealing with specificity
>
> Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a `<div>` with the class.
>
> ## Conveying meaning to assistive technologies
>
> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## Special color "mark"

Beside the `$theme-colors` there is another color name **mark** which can be used for special highlighting like with a marker pen.
The color can be used with variables defined in `_variables.scss`. There are three variables available for usage.

* `$mark`
* `$mark-light`
* `$mark-darker`

These can be used everywhere in your sass files as long as the `_variables.scss` is included before their usage.

To use the mark color also in your css and html there are three utility classes ready to use. `.text-mark` can be used to set the `color`, `.gb-mark` to adjust the `background-color` and `.bg-gradient-mark` to set the background with a y-gradient.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ColorMark.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ColorMark.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ColorMark](examples/ColorMark.html)

> ## Pay attention with contrast ratio
>
> By using the color mark take care of the contrast ratio of the content to the background. The content should always be legible, even for people with impaired vision. In addition, the mark color should only be used very sparingly in order to fulfil its purpose as a highlight color.
