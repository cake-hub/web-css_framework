# Theming CAKE

Customize CAKE with our built-in Sass variables for global style preferences for easy theming and component changes.

## Introduction

Theming is accomplished by Sass variables, Sass maps, and custom CSS. You can enable the built-in theme to add gradients, shadows, and more.

## Sass

Utilize our source Sass files to take advantage of variables, maps, mixins, and more.

### Variable defaults

Every Sass variable in CAKE includes the `!default` flag allowing you to override the variable’s default value in your own Sass without modifying CAKE’s source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won’t be re-assigned by the default values in CAKE.

You will find the complete list of CAKE’s variables in `scss/_variables.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.

Variable overrides within the same Sass file can come before or after the default variables. However, when overriding across Sass files, your overrides must come before you import CAKE’s Sass files.

Here’s an example that changes the `background-color` and `color` for the `<body>` when importing CAKE:

    // Your variable overrides
    $body-bg: #000;
    $body-color: #111;

    // CAKE and its default variables
    @import "../scss/cake";

Repeat as necessary for any variable in CAKE, including the global options below.

### Maps and loops

CAKE includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making removing items from a map slightly more difficult.

#### Modify map

To modify an existing color in our `$theme-colors` map, add the following to your custom Sass file:

    $theme-colors: (
        "primary": #0074d9,
        "danger": #ff4136
    );

#### Add to map

To add a new color to `$theme-colors`, add the new key and value:

    $theme-colors: (
        "custom-color": #900
    );

#### Remove from map

To remove colors from `$theme-colors`, or any other map, use `map-remove`. Be aware you must insert it between our requirements and options:

    // Required
    @import "scss/functions";
    @import "scss/variables";
    @import "scss/mixins";

    $theme-colors: map-remove($theme-colors, "info", "light", "dark");

    // Optional
    @import "scss/root";
    @import "scss/reboot";
    @import "scss/type";
    ...

#### Required keys

CAKE assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map’s key is being used.

For example, we use the `primary`, `success`, and `danger` keys from `$theme-colors` for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you’ll need to modify the Sass code that makes use of those values.

### Functions

CAKE utilizes several Sass functions, but only a subset are applicable to general theming. We’ve included one function for getting values from the color and gradation map:

    @function cake-color($base-color: "primary", $gradation: "lighter") {…}

These allow you to pick one color from a Sass map. The second parameter `$gradation` is optional. If you skip this parameter, you will receive the base-color:

    .custom-element {
        color: cake-color("danger", "darker");
        background-color: cake-color("gray");
    }

In practice, you’d call the function and pass in two parameters: the name of the color from `$theme-colors` (e.g., primary or danger) and a gradation level from `$gradations`.

Additional functions could be added in the future or your own custom Sass to create level functions for additional Sass maps, or even a generic one if you wanted to be more verbose.


## Sass options

Customize CAKE with our built-in custom variables file and easily toggle global CSS preferences with `$enable-*` Sass variables. Override a variable’s value and recompile.

You can find and customize these variables for key global options in CAKE’s `src/Cake/_Toolkit/scss/_variables.scss` file.

|Variable|Values|Description|
| ------ |------| ----------|
|`$spacer`|`.5rem` (default), or any value > 0 |Specifies the default spacer value to programmatically generate our [spacer utilities](../../Utilities/Spacing/Spacing.md).|
|`$enable-rounded`|`true` or `false` (default)|Enables predefined `border-radius` styles on various components.|
|`$enable-shadows`|`true` or `false` (default)|Enables predefined `box-shadow` styles on various components.|
|`$enable-gradients`|`true` or `false` (default)|Enables predefined gradients via `background-image` styles on various components.|
|`$enable-transitions`|`true` (default) or `false`|Enables predefined `transition`s on various components.|
| `$enable-prefers-reduced-motion-media-query` | `true` (default) or `false`        | Enables the `prefers-reduced-motion` media query, which suppresses certain animations/transitions based on the users' browser/operating system preferences. |
|`$enable-hover-media-query`|`true` or `false` (default)|**Deprecated**|
|`$enable-grid-classes`|`true` (default) or `false`|Enables the generation of CSS classes for the grid system (e.g., `.container`, `.row`, `.col-md-1`, etc.).|
|`$enable-caret`|`true` (default) or `false`|Enables pseudo element caret on `.dropdown-toggle`.|
| `$enable-pointer-cursor-for-buttons`         | `true` (default) or `false`        | Add "hand" cursor to non-disabled button elements. |
|`$enable-print-styles`|`true` (default) or `false`|Enables styles for optimizing printing.|
| `$enable-responsive-font-sizes`              | `true` or `false` (default)        | Enables [responsive font sizes](../../Content/Typography/Typography.md#responsive-font-sizes). |
| `$enable-validation-icons`                   | `true` (default) or `false`        | Enables `background-image` icons within textual inputs and some custom forms for validation states. |
| `$enable-deprecation-messages`               | `true` or `false` (default)        | Set to `true` to show warnings when using any of the deprecated mixins and functions that are planned to be removed in `v5`. |
