# Reboot

Reboot, a collection of element-specific CSS changes in a single file, kickstart CAKE to provide an elegant, consistent, and simple baseline to build upon.

## Approach

Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

* Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
* Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
* For easier scaling across device sizes, block elements should use `rem`s for `margins`.
* Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

* The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  * No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. But in `lg` breakpoint it is set to `1.125rem` that corresponds to `18px`.
* The `<body>` also sets a global `font-family`, `line-height`, and `text-align`. This is inherited later by some form elements to prevent font inconsistencies.
* For safety, the `<body>` has a declared `background-color`, defaulting to `#fafafa`.

## Font stack

We use the Lidl house typeface LidlFontCondPro as primary font family. “Native font stack” is defined as fallback.

    $font-family-sans-serif:
      // Lidl house typeface
      LidlFontCondPro,
      // Safari for macOS and iOS (San Francisco)
      -apple-system,
      // Chrome < 56 for macOS (San Francisco)
      BlinkMacSystemFont,
      // Windows
      "Segoe UI",
      // Android
      "Roboto",
      // Basic web fallback
      "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      // Emoji fonts
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;

This `font-family` is applied to the `<body>` and automatically inherited globally throughout CAKE. To switch the global `font-family`, update `$font-family-base` and recompile CAKE.

## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings level 1 have `margin-bottom: 2rem`, level 2 `margin-bottom: 1rem` and all other `margin-bottom: .5rem` added. Paragraphs have `margin-bottom: 2rem` for easy spacing.

## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

* `<fieldset>`s have no `border`s, `padding`, or `margin` so they can be easily used as wrappers for individual inputs or groups of inputs.
* `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
* `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
* `<input>`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
* `<textarea>`s are modified to only be resizable vertically as horizontal resizing often “breaks” page layout.
* `<button>`s and `<input>` button elements have `cursor: pointer` when `:not(:disabled)`.

