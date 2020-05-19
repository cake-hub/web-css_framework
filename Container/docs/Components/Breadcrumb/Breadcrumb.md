<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Breadcrumb

Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

## Example

<ContentRack
    fields='
        "preview": {
            "src": "examples/BreadcrumbDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/BreadcrumbDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![BreadcrumbDefault](examples/BreadcrumbDefault.html)

## Changing the separator

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by changing `$breadcrumb-divider`.

Use a **base64 embedded SVG icon**:

```scss
$breadcrumb-divider: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTI0LjYgMGwtNS4yIDMgMTUuMiAyNy0xNS4yIDI3IDUuMiAzIDE2LTI4LjV2LTN6Ii8+PC9zdmc+");
```

It's also possible to use a **URI embedded SVG icon**:

```scss
$breadcrumb-divider: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M24.6 0l-5.2 3 15.2 27-15.2 27 5.2 3 16-28.5v-3z'/%3E%3C/svg%3E");
```

Another option is to use the function **`svg-load`** to load a svg file, which will be placed inline into the css at comilation of the scss:

```scss
$breadcrumb-divider: svg-load('path/to/icon.svg', fill=#000);
```

You can read more about it in the PostCSS plugin itself: <https://github.com/TrySound/postcss-inline-svg>

The separator can be removed by setting `$breadcrumb-divider` to `none`:

```scss
$breadcrumb-divider: none;
```

## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
