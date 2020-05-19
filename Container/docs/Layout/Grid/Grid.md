<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Grid system

Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, four default responsive tiers, Sass variables and mixins, and dozens of predefined classes.

## How it works

CAKE's grid system uses a series of containers, rows, and columns to layout and align content. It's built with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

**New to or unfamiliar with flexbox?** [Read this CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridDefault.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridDefault](examples/GridDefault.html)

The above example creates three equal-width columns on small, medium and large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

Breaking it down, here's how it works:

- Containers provide a means to center and horizontally pad your site's contents. Use `.container` for a responsive pixel width or `.container-fluid` for `width: 100%` across all viewport and device sizes. If you want to use a container with responsive behaviour (`width: 100%`) but a maximum width on the largest breakpoint (`max-width`), you can use the `.container-responsive` class.
- Rows are wrappers for columns. Each column has horizontal `padding` (called a gutter) for controlling the space between them. This `padding` is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
- In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
- Thanks to flexbox, grid columns without a specified `width` will automatically layout as equal width columns. For example, four instances of `.col-sm` will each automatically be 25% wide from the small breakpoint and up. See the [auto-layout columns](#auto-layout-columns) section for more examples.
- Column classes indicate the number of columns you'd like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use `.col-4`.
- Column `width`s are set in percentages, so they're always fluid and sized relative to their parent element.
- Columns have horizontal `padding` to create the gutters between individual columns, however, you can remove the `margin` from rows and `padding` from columns with `.no-gutters` on the `.row`.
- To make the grid responsive, there are four grid breakpoints, one for each [responsive breakpoint](Overview/Overview.md#responsive-breakpoints): all breakpoints (extra small), small, medium and large.
- Grid breakpoints are based on minimum width media queries, meaning **they apply to that one breakpoint and all those above it** (e.g., `.col-sm-4` applies to small, medium and large devices, but not the first `xs` breakpoint).
- You can use predefined grid classes (like `.col-4`) or [Sass mixins](#sass-mixins) for more semantic markup.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

## Grid options

While CAKE uses `em`s or `rem`s for defining most sizes, `px`s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the [font size](https://drafts.csswg.org/mediaqueries-3/#units).

See how aspects of the CAKE grid system work across multiple devices with a handy table.

<div className="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
            <th></th>
            <th class="text-center">
                Extra small<br>
                <small>&lt;600px</small>
            </th>
            <th class="text-center">
                Small<br>
                <small>&ge;600px</small>
            </th>
            <th class="text-center">
                Medium<br>
                <small>&ge;960px</small>
            </th>
            <th class="text-center">
                Large<br>
                <small>&ge;1280px</small>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th class="text-nowrap" scope="row">Max container width</th>
            <td>None (auto)</td>
            <td>600px</td>
            <td>960px</td>
            <td>1280px</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Class prefix</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">\# of columns</th>
            <td colspan="5">12</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Gutter width</th>
            <td colspan="5">16px (8px on each side of a column)</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Nestable</th>
            <td colspan="5">Yes</td>
            </tr>
            <tr>
            <th class="text-nowrap" scope="row">Column ordering</th>
            <td colspan="5">Yes</td>
            </tr>
        </tbody>
    </table>
</div>

## Auto-layout columns

Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like `.col-sm-6`.

### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `lg`. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridEqualWidth.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridEqualWidth.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridEqualWidth](examples/GridEqualWidth.html)

Equal-width columns can be broken into multiple lines, but there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#flexbug-11) that prevented this from working without an explicit `flex-basis` or `border`. There are workarounds for older browser versions, but they shouldn't be necessary if you're up-to-date.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridEqualWidthWorkaround.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridEqualWidthWorkaround.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridEqualWidthWorkaround](examples/GridEqualWidthWorkaround.html)

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridOneColumnWidth.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridOneColumnWidth.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridOneColumnWidth](examples/GridOneColumnWidth.html)

### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridVariableWidthContent.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridVariableWidthContent.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridVariableWidthContent](examples/GridVariableWidthContent.html)

### Equal-width multi-row

Create equal-width columns that span multiple rows by inserting a `.w-100` where you want the columns to break to a new line. Make the breaks responsive by mixing the `.w-100` with some [responsive display utilities](../../Utilities/Display/Display.md).

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridEqualWidthMultiRow.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridEqualWidthMultiRow.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridEqualWidthMultiRow](examples/GridEqualWidthMultiRow.html)

## Responsive classes

CAKE's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridAllBreakpoints.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridAllBreakpoints.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridAllBreakpoints](examples/GridAllBreakpoints.html)

### Stacked to horizontal

Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (`sm`).

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridStackedToHorizontal.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridStackedToHorizontal.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridStackedToHorizontal](examples/GridStackedToHorizontal.html)

### Mix and match

Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.

#### Stack the columns on mobile by making one full-width and the other half-width

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridMixMatch1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridMixMatch1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridMixMatch1](examples/GridMixMatch1.html)

#### Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridMixMatch2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridMixMatch2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridMixMatch2](examples/GridMixMatch2.html)

#### Columns are always 50% wide, on mobile and desktop

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridMixMatch3.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridMixMatch3.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridMixMatch3](examples/GridMixMatch3.html)

### Gutters

Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the `.row` and matching padding utilities on the `.col`s. The `.container` or `.container-fluid` parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.

Here's an example of customizing the CAKE grid at the large (`lg`) breakpoint and above. We've increased the `.col` padding with `.px-lg-5`, counteracted that with `.mx-lg-n5` on the parent `.row` and then adjusted the `.container` wrapper with `.px-lg-5`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridGutter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridGutter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridGutter](examples/GridGutter.html)

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns. **Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a `min-height` as shown below.**

### Vertical alignment

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridVerticalAlignment1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridVerticalAlignment1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridVerticalAlignment1](examples/GridVerticalAlignment1.html)

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridVerticalAlignment2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridVerticalAlignment2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridVerticalAlignment2](examples/GridVerticalAlignment2.html)

### Horizontal alignment

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridHorizontalAlignment.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridHorizontalAlignment.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridHorizontalAlignment](examples/GridHorizontalAlignment.html)

### No gutters

The gutters between columns in our predefined grid classes can be removed with `.no-gutters`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

Here's the source code for creating these styles. Note that column overrides are scoped to only the first children columns and are targeted via [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). While this generates a more specific selector, column padding can still be further customized with [spacing utilities](../../Utilities/Spacing/Spacing.md).

**Need an edge-to-edge design?** Drop the parent `.container`, `.container-fluid` or `.container-responsive`.

    .no-gutters {
      margin-right: 0;
      margin-left: 0;

      > .col,
      > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
      }
    }

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridNoGutter.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridNoGutter.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridNoGutter](examples/GridNoGutter.html)


### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridColumnWrapping.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridColumnWrapping.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridColumnWrapping](examples/GridColumnWrapping.html)

### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every implementation method can account for this.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridColumnBreaks1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridColumnBreaks1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridColumnBreaks1](examples/GridColumnBreaks1.html)

You may also apply this break at specific breakpoints with our [responsive display utilities](../../Utilities/Display/Display.md).

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridColumnBreaks2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridColumnBreaks2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridColumnBreaks2](examples/GridColumnBreaks2.html)

## Reordering

### Order classes

Use `.order-` classes for controlling the **visual order** of your content. These classes are responsive, so you can set the `order` by breakpoint (e.g., `.order-1.order-md-2`). Includes support for `1` through `12` across all five grid tiers.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridOrderClasses1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridOrderClasses1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridOrderClasses1](examples/GridOrderClasses1.html)

There are also responsive `.order-first` and `.order-last` classes that change the `order` of an element by applying `order: -1` and `order: 13` (`order: $columns + 1`), respectively. These classes can also be intermixed with the numbered `.order-*` classes as needed.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridOrderClasses2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridOrderClasses2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridOrderClasses2](examples/GridOrderClasses2.html)

### Offsetting columns

You can offset grid columns in two ways: our responsive `.offset-` grid classes and our [margin utilities](../../Utilities/Spacing/Spacing.md). Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset classes

Move columns to the right using `.offset-md-*` classes. These classes increase the left margin of a column by `*` columns. For example, `.offset-md-4` moves `.col-md-4` over four columns.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridOffsetClasses1.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridOffsetClasses1.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridOffsetClasses1](examples/GridOffsetClasses1.html)

In addition to column clearing at responsive breakpoints, you may need to reset offsets. <!-- See this in action in [the grid example]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/grid/). -->

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridOffsetClasses2.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridOffsetClasses2.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridOffsetClasses2](examples/GridOffsetClasses2.html)

#### Margin utilities

With the move to flexbox in v4, you can use margin utilities like `.mr-auto` to force sibling columns away from one another.

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridMarginUtilities.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridMarginUtilities.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridMarginUtilities](examples/GridMarginUtilities.html)

## Nesting

To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing `.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridNesting.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridNesting.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridNesting](examples/GridNesting.html)


## Sass mixins

When using CAKE's source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.

### Variables

Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.

    $grid-columns:      12;
    $grid-gutter-width: 16px;

    $grid-breakpoints: (
      // Extra small screen / phone
      xs: 0,
      // Small screen / phone
      sm: 600px,
      // Medium screen / tablet
      md: 960px,
      // Large screen / desktop
      lg: 1280px
    );

    $container-max-widths: (
      sm: 568px,
      md: 912px,
      lg: 1200px
    );

### Mixins

Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

    // Creates a wrapper for a series of columns
    @include make-row();

    // Make the element grid-ready (applying everything but the width)
    @include make-col-ready();
    @include make-col($size, $columns: $grid-columns);

    // Get fancy by offsetting, or changing the sort order
    @include make-col-offset($size, $columns: $grid-columns);

### Example usage

You can modify the variables to your own custom values, or just use the mixins with their default values. Here's an example of using the default settings to create a two-column layout with a gap between.

    .example-container {
      @include make-container();
    }

    .example-row {
      @include make-row();
    }

    .example-content-main {
      @include make-col-ready();

      @include media-breakpoint-up(sm) {
        @include make-col(6);
      }
      @include media-breakpoint-up(lg) {
        @include make-col(8);
      }
    }

    .example-content-secondary {
      @include make-col-ready();

      @include media-breakpoint-up(sm) {
        @include make-col(6);
      }
      @include media-breakpoint-up(lg) {
        @include make-col(4);
      }
    }

<ContentRack
    fields='
        "preview": {
            "src": "examples/GridSassExampleUsage.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/GridSassExampleUsage.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![GridSassExampleUsage](examples/GridSassExampleUsage.html)

## Customizing the grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.

### Columns and gutters

The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths (in percent) of each individual column while `$grid-gutter-width` sets the width for the column gutters.

    $grid-columns: 12 !default;
    $grid-gutter-width: 16px !default;

### Grid tiers

Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you'd update the `$grid-breakpoints` and `$container-max-widths` to something like this:

    $grid-breakpoints: (
      xs: 0,
      sm: 480px,
      md: 768px,
      lg: 1024px
    );

    $container-max-widths: (
      sm: 420px,
      md: 720px,
      lg: 960px
    );

When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in `px` (not `rem`, `em`, or `%`).
