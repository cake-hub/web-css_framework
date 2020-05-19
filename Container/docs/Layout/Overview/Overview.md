# Overview

Components and options for laying out your CAKE project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.

## Containers

Containers are the most basic layout element in CAKE and are **required when using our default grid system**. Choose from a responsive, fixed-width container (meaning its `max-width` changes at each breakpoint) or fluid-width (meaning it's `100%` wide all the time).

While containers *can* be nested, most layouts do not require a nested container.

Use `.container-responsive` for a full width container, with a maximum with of `1280px`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/OverviewContainerResponsive.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/OverviewContainerResponsive.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![OverviewContainerResponsive](examples/OverviewContainerResponsive.html)


Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

<ContentRack
    fields='
        "preview": {
            "src": "examples/OverviewContainerFluid.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/OverviewContainerFluid.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![OverviewContainerFluid](examples/OverviewContainerFluid.html)


Use `.container` for a adaptive container, which will scale at specific break-points.

<ContentRack
    fields='
        "preview": {
            "src": "examples/OverviewContainer.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/OverviewContainer.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![OverviewContainer](examples/OverviewContainer.html)


## Responsive breakpoints

CAKE is developed to be mobile first, so we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

CAKE primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

    // Extra small devices (portrait phones, less than 600px)
    // No media query for `xs` since this is the default in CAKE

    // Small devices (landscape phones, 600px and up)
    @media (min-width: 600px) { ... }

    // Medium devices (tablets, 960px and up)
    @media (min-width: 960px) { ... }

    // Large devices (desktops, 1280px and up)
    @media (min-width: 1280px) { ... }

We write our source CSS in Sass, all our media queries are available via Sass mixins:

    // No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
    @include media-breakpoint-up(sm) { ... }
    @include media-breakpoint-up(md) { ... }
    @include media-breakpoint-up(lg) { ... }

    // Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
    .custom-class {
      display: none;
    }
    @include media-breakpoint-up(sm) {
      .custom-class {
        display: block;
      }
    }

We occasionally use media queries that go in the other direction (the given screen size or smaller):

    // Extra small devices (portrait phones, less than 600px)
    @media (max-width: 599.98px) { ... }

    // Small devices (landscape phones, less than 960px)
    @media (max-width: 959.98px) { ... }

    // Medium devices (tablets, less than 1280px)
    @media (max-width: 1279.98px) { ... }

    // Extra large devices (large desktops)
    // No media query since the extra-large breakpoint has no upper bound on its width

> Note that since browsers do not currently support [range context queries](https://www.w3.org/TR/mediaqueries-4/#range-context), we work around the limitations of [min- and max- prefixes](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.

Once again, these media queries are also available via Sass mixins:

    @include media-breakpoint-down(xs) { ... }
    @include media-breakpoint-down(sm) { ... }
    @include media-breakpoint-down(md) { ... }
    // No media query necessary for xl breakpoint as it has no upper bound on its width

    // Example: Style from medium breakpoint and down
    @include media-breakpoint-down(md) {
      .custom-class {
        display: block;
      }
    }

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

    // Extra small devices (portrait phones, less than 600px)
    @media (max-width: 599.98px) { ... }

    // Small devices (landscape phones, 600px and up)
    @media (min-width: 600px) and (max-width: 959.98px) { ... }

    // Medium devices (tablets, desktop, 960px and up)
    @media (min-width: 960px) and (max-width: 1279.98px) { ... }

    // Extra large devices (large desktops, 1280px and up)
    @media (min-width: 1280px) { ... }

These media queries are also available via Sass mixins:

    @include media-breakpoint-only(xs) { ... }
    @include media-breakpoint-only(sm) { ... }
    @include media-breakpoint-only(md) { ... }
    @include media-breakpoint-only(lg) { ... }

Similarly, media queries may span multiple breakpoint widths:

    // Example
    // Apply styles starting from small devices and up to large devices
    @media (min-width: 600px) and (max-width: 1279.98px) { ... }

The Sass mixin for targeting the same screen size range would be:

    @include media-breakpoint-between(sm, lg) { ... }
