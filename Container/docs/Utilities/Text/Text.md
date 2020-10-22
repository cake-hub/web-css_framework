# Text

Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

## Text alignment

Easily realign text to components with text alignment classes.

```html
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
```

For left, right, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

```html
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
```

## Text wrapping and overflow

Wrap text with a `.text-wrap` class.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TextWrap.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TextWrap.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TextWrap](examples/TextWrap.html)

Prevent text from wrapping with a `.text-nowrap` class.

```html
<div class="text-nowrap bd-highlight" style="width: 8rem;">
    This text should overflow the parent.
</div>
```

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

```html
<!-- Block level -->
<div class="row">
    <div class="col-2 text-truncate">
        Praeterea iter est quasdam res quas ex communi.
    </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
    Praeterea iter est quasdam res quas ex communi.
</span>
```

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `overflow-wrap: break-word` (and `word-break: break-word` for IE & Edge compatibility).

<ContentRack
    fields='
        "preview": {
            "src": "examples/TextBreak.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TextBreak.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TextBreak](examples/TextBreak.html)

## Word separation

To optimise your space used by text, you can add the class `.hyphens`. This class make sure your words break right or at least they don't break the wrapping container.
Be sure to use the right language. If the language of the text don't match the language of the site, add the `lang` attribute to the container of the text.
As an alternative you can use `&shy;` as an additional breakpoint in a word on content level.

If the browser don't support `hyphens: auto;` the property `overflow-wrap: break-word;` reacts as an fallback, so the words be broken at arbitrary points, if there are no otherwise acceptable break points in the line.

The three boxes have the same text. The first one is only the raw text, the second is with the class `.hyphens` and the last one is with `&shy;`, seen here:

```html
Ses&shy;qui&shy;pe&shy;da&shy;lian&shy;ism is a common prob&shy;lem on small el&shy;e&shy;ments. There is no need for Floc&shy;cin&shy;aucini&shy;hilipil&shy;i&shy;fi&shy;ca&shy;tion on this subject.
Take care of word sep&shy;a&shy;ra&shy;tion over multiple lines to not generate In&shy;com&shy;pre&shy;hen&shy;si&shy;bili&shy;ties.
This text is un&shy;copy&shy;right&shy;able, ev&shy;ery&shy;thing else were Un&shy;imag&shy;i&shy;na&shy;tive&shy;ly.
```

<ContentRack
    fields='
        "preview": {
            "src": "examples/TypographyWordBreak.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TypographyWordBreak.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TypographyWordBreak](examples/TypographyWordBreak.html)

## Text transform

Transform text in components with text capitalization classes.

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
```

Note how `.text-capitalize` only changes the first letter of each word, leaving the case of any other letters unaffected.

## Font weight and italics

Quickly change the weight (boldness) of text or italicize text.

```html
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p class="font-italic">Italic text.</p>
```

## Monospace

Change a selection to our monospace font stack with `.text-monospace`.

```html
<p class="text-monospace">This is in monospace</p>
```

## Reset color

Reset a text or link's color with `.text-reset`, so that it inherits the color from its parent.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TextReset.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TextReset.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TextReset](examples/TextReset.html)

## Text decoration

Remove a text decoration with a `.text-decoration-none` class.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TextDecoration.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TextDecoration.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TextDecoration](examples/TextDecoration.html)

## Font sizes

Use a specific font size. In most cases it will be used in content sections. Instead of `<small>` or `.small` with percentage sizes the `.text-sm` and `.text-lg` uses specific font sizes.
Default for `.text-sm` is `0.75rem` (12px) for mobile screens and `0.875rem` (14px) for lg breakpoint.
Default for `.text-lg` is `1.25rem` (20px) for mobile screens and `1.375rem` (22px) for lg breakpoint.

```html
<p class="text-sm">Small text.</p>
<p class="text-lg">Large text.</p>
```
