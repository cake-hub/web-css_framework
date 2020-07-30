<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Button

Use CAKE’s custom button styles for actions in forms, dialogs, and more with support for states and more.

## Examples

CAKE includes predefined button styles with a few extras thrown in for more control.

We provide a "normal / positive" and a "inverted / negative" button styling. You can place the inverted buttons in front of dark background colors.

### Positive styles

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonPositive.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonPositive.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonPositive](examples/ButtonPositive.html)

In exceptional cases, the transparency of the positive secondary button can be changed to "white" using the utility modifier `.bg-white` to ensure the readability of the button text.

### Negative styles

Place the `-negative` suffix to the button class to get the inverted style.

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonNegative.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonNegative](examples/ButtonNegative.html)

> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.

## Button tags

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

## Icon

CAKE provides SVG icons that can be placed inside buttons. Insert the [icon sprite](../Icon/Icon.md) to your HTML document. Use the `.btn-icon` class for basic styling and the size class `.icon-24` to set width and height to `24px` (`1.5rem`).

### Positiv icon with text

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonWithIcon.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonWithIcon.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonWithIcon](examples/ButtonWithIcon.html)

### Positive icon

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonWithIconPositive.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonWithIconPositive.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonWithIconPositive](examples/ButtonWithIconPositive.html)

### Negative icon with text

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonWithIconAndTextNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonWithIconAndTextNegative.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonWithIconAndTextNegative](examples/ButtonWithIconAndTextNegative.html)

### Negative icon

<ContentRack
    fields='
        "preview": {
            "src": "examples/ButtonWithIconNegative.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/ButtonWithIconNegative.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![ButtonWithIconNegative](examples/ButtonWithIconNegative.html)

## Sizes

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

## Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There’s no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

```html
<button type="button" class="btn btn-primary" disabled>Primary disabled</button>
<button type="button" class="btn btn-secondary" disabled>Secondary disabled</button>

<button type="button" class="btn btn-primary-negative" disabled>Primary disabled</button>
<button type="button" class="btn btn-secondary-negative" disabled>Secondary disabled</button>
```

Disabled buttons using the `<a>` element behave a bit different:

* `<a>`s don’t support the disabled attribute, so you must add the `.disabled` class to make it visually appear disabled.
* Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
* Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.


```html
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
```


> ### Link functionality caveat
>
> The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
