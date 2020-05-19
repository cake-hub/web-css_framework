<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Header

The header is a component for creating brand awareness and providing important or legally required links.

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe src="examples/HeaderDefault.html" style="min-height: 23.5rem" title="Header default" alt="HeaderDefault" />


## Parts of the Header

The header consists of different parts, to provide various informations or clickable content:

* brand (`.header-brand`)
* brand-navigation (`.header-brandnav`)
* language selection (`.header-language`)
* logo (`.header-logo`)
* claim (`.header-claim`)
* usernavigation (`.header-usernavigation`) with an optional usernavigation badge (`.header-usernavigation-badge`) [This component is using the [Badge](../Badge/Badge.md) component. So you have to **include the Badge component CSS** to use the usernavigation badge.]<br>
Adjust the `width` of the items to fit to the word length in your project. The width applies to every usernavigation list item.
* navigation burgermenu (`.header-navigation-burgermenu`)
* main navigation (`.header-navigation`) with navigation-back (`.header-navigation-back`) and navigation list (`.header-navigation-list`)


## Header with subnavigation

The header provides also the option to display a second level navigation. Therefore the header subnavigation list (`.header-subnavigation-list`) has to be appended below the navigation list (`.header-navigation-list`). You can see this in the following example:

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderSubnavigation.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderSubnavigation.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe src="examples/HeaderSubnavigation.html" style="min-height: 23.5rem" title="Header with Subnavigation" alt="HeaderSubnavigation" />


## 3rd party mobile menu button

The mobile burger menu button rely on the 3rd party library "[hamburgers](https://github.com/jonsuh/hamburgers)". It is configured in `variables.scss`. We use the "squeeze" animation as default. Feel free to use other animations of these projekt. You can find examples on the Git project page.

If you want to use your own button simple comment or remove the import line in `cake.scss` to remove the CSS. After that you can write and include your own styles.


## Header list

Some parts of the header use the so called **header list**. This class can be used in the header, to provide links which should sematically stay in a list. When applying the `.header-list` class on the parts like the `.header-brandnav`, `.header-language` or `.header-usernvaigation`, the default list styling will be removed and the list items will be placed next to each other with `display: inline-block`.
Additionally there are classes for the items in the list (`.header-list-item`) and for optional links inside these list items (`.header-list-item-link`).


## Responsive behavior

For some parts, the responsive behavior is created with utility classes. If there is a need to change this behavior, you can simply modify and adjust the applied modifiers with the ones that fit you needs perfectly. How these modifiers work can be read in the related pages: [Overview: Containers](../../Layout/Overview/Overview.md#containers) and [Display](../../Utilities/Display/Display.md).
However, for some behaviors no modifiers could be used, which is why adaptations at these places have to be implemented directly in the CSS/SCSS or by own supplementary classes.


> ### Use modifiers over custom css
>
> When adjusting the header to make it matching your project perfectly, be careful at creating **own style rules**. In most of the cases the **modifiers** (as listed above and many more) will fit your needs perfectly and you do not have to write a single line of css/scss.


## Accessibility

The header component should always be rendered as a `<header>` element. Otherwise the landmark `role="banner"` should be applied – when its context is not the body element – to identify the page header as explained at [W3: Banner Landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/banner.html).

There is also a landmark available for the navigation parts of the header. Each of the list should have the landmark `role="navigation"` and an `aria-label="label"` with a meaningful label, which implicates, that it is a group of navigation links. Alternatively, the nav element can be used to identify a group of navigation elements, which should be preffered, when there is no list item (`ul`, `ol`) used: [W3: Navigation Landmark](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html).

For the main navigation of the header, the `<nav>` element should be used and at the best it should be described by a meaningful `aria-label=""`.
To increase the accessibility you should consider to add the aria attributes `aria-pressed` to the navigation burgermenu (`.header-navigation-burgermenu`) and `aria-expanded` to the main navigation (`.header-navigation`). The JavaScript (`header.js`) is already using `aria-pressed` and `aria-expanded`.

The language selection has only abbreviations as text. Therefore the use of the [abbr-tag](https://developer.mozilla.org/de/docs/Web/HTML/Element/abbr) is recommended. You can add a `title` attribute with the fully written word to this element. Additionally you should add this text as `aria-label=""` in order to support screenreaders. Sadly both attributes, the `title` and `aria-label` attributes are required in this case, because screenreaders do not read the `title` tag by default.
As an indicator for the selected language you should also extend the `aria-label` of the language that has been selected. You can see the described structure in our header examples and below:

    <li class="header-list-item">
      <a
        href="//var/www/html/docs/Web/Develop/Components/Header/HeaderDefault.html#"
        class="header-list-item-link header-language-link"
        aria-label="fully written language (selected language)">
        <abbr title="fully written language">XX</abbr>
        <span class="header-language-active-icon"></span>
      </a>
    </li>

The same situation arises for the user navigation as for the language selection. Here, too, a corresponding explanation must be provided for the number in the badge. This is simply defined as screenreader only text `.sr-only` as described in the [accessibility section of the badge](../Badge/Badge.md#accessibility).


## JavaScript

### Header / Burgermenu

CAKEs JavaScript takes care for the behavior of the header and navigation for the handheld breakpoints.
To initialize the behavior of the example above, you have to add the `header.js` script to you project. Additionally you have to apply some `data-controllers`. The header element (`.header`) needs `data-controller="header"`, the navigation burgermenu (`.header-navigation-burgermenu`) `data-controller="header/burgermenu"` and the main navigation (`.header-navigation`) needs `data-controller="header/navigation"` to make the header work properly with our JavaScript.

By clicking the burger menu on small screens the `[data-controller="header/burgermenu"]` gets the `.is-active` class. Also the `data-controller="header"` toggles the `.header-mobile-overlay` class.

### Subnavigation

To use CAKE's JavaScript you have to add some important `data-controllers`, so that our JavaScript can initialize correctly.
The back button in the navigation needs the `data-controller="header/navigation/back"`. All navigation lists need the `data-controller="header/navigation/menu"` and the links the `data-controller="header/navigation/link"`. Additionally the navigation lists must have a identifier (`data-identifier="XXX"`) to be linkable by the links. As a default the first navigation list will be shown on mobile. To adjust the shown navigation list on page-load, simply add the `data-active` attribute.
To link to a specific navigation list, you need to add a target to the links like this: `data-target="XXX"`. By clicking on this link our JavaScript will automatically load the correct navigation list with the `data-identifier` matching the `data-target` of the link.

After setting up all the required data-controllers, you can execute the method `subnavigation (…)`. As an argument this method takes an array of navigation identifiers (`navigationHistoryIdentifiers`) which you have previously set with the `data-identifier` attribute. As a default this array will be empty `[]`, but to set a navigation path already on load, you can extend this list like in the following example:

    subnavigation ([
        "header/navigation/menu",
        "header/navigation/sub/sub1",
        …
    ]);

If there are entries in the navigation history, the back-button will be shown and on click the navigation will change to the latest navigation identifier specified in the list.

### Events

There are several events that get's fired, when using our JavaScript of the header.

| Element | Event | Event return object | Description |
|---|---|---|
| header (`[data-controller="header"]`) | `open` | `{ opened: "true/false" }` | Get's dispatched, when the burger-menu opens or closes. The burger-menu closes automatically, if the window fires a resize event. |
| navigation (`[data-controller="header/navigation"]`) | `navigation-will-change` | `{ identifier: "XXX", previousIdentifier: "XXX", element: <el>, previousElement: <el> }` | Get's dispatched, just before the element get's shown and the previous-element gets hidden. |
| navigation (`[data-controller="header/navigation"]`) | `navigation-has-changed` | `{ identifier: "XXX", previousIdentifier: "XXX", element: <el>, previousElement: <el> }` | Get's dispatched, just after the element got shown and the previous-element got hidden. |

    document.querySelector ("[data-controller="header"]").addEventListener ("open", function (event) {
        var menuOpen = event.detail.opened;
    });
    document.querySelector ("[data-controller="header/navigation"]").addEventListener ("navigation-will-change", function (event) {
        var details = event.detail;
    });
    document.querySelector ("[data-controller="header/navigation"]").addEventListener ("navigation-has-changed", function (event) {
        var details = event.detail;
    });

## Large variant of Header with Subnavigation

<ContentRack
    fields='
        "preview": {
            "src": "examples/HeaderSubnavigationLarge.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/HeaderSubnavigationLarge.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe src="examples/HeaderSubnavigationLarge.html" style="min-height: 23.5rem" title="Header with Subnavigation (large)" alt="HeaderSubnavigationLarge" />
