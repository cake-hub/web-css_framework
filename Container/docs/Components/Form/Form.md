<AlertWarning alertHeadline="Not modifiable">
 It is mandatory to maintain the appearance and behavior of these components.
</AlertWarning>

# Form

Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.

## Overview

CAKE’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

Keep reading for documentation on required classes, form layout, and more.

## Form controls

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our custom form to further style `<select>`s.

## Checkboxes and radios

Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported. The `disabled` attribute will apply a lighter color to help indicate the input's state.

Checkboxes and radios use are built to support HTML-based form validation and provide concise, accessible labels. As such, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify id and for attributes to relate the `<input>` and `<label>`.

For even more customization and cross browser consistency, we use completely custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.

Each checkbox and radio `<input>` and `<label>` pairing is wrapped in a `<div>` to create our custom control. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`’s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can’t build a custom one from just the `<input>` because CSS’s `content` doesn’t work on that element.

In the checked states, we use **base64 embedded SVG icons**. This provides us the best control for styling and positioning across browsers and devices.

## Radio

### Radio default

<ContentRack
    fields='
        "preview": {
            "src": "examples/RadioDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RadioDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![RadioDefault](examples/RadioDefault.html)

### Radio disabled and checked

<ContentRack
    fields='
        "preview": {
            "src": "examples/RadioDisabledChecked.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RadioDisabledChecked.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![RadioDisabledChecked](examples/RadioDisabledChecked.html)

### Radio error

<ContentRack
    fields='
        "preview": {
            "src": "examples/RadioError.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RadioError.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![RadioError](examples/RadioError.html)

### Radio required (validated)

<ContentRack
    fields='
        "preview": {
            "src": "examples/RadioRequiredValidated.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/RadioRequiredValidated.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![RadioRequiredValidated](examples/RadioRequiredValidated.html)

## Checkbox

### Checkbox default

<ContentRack
    fields='
        "preview": {
            "src": "examples/CheckboxDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CheckboxDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CheckboxDefault](examples/CheckboxDefault.html)

### Checkbox disabled and checked

<ContentRack
    fields='
        "preview": {
            "src": "examples/CheckboxDisabledChecked.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CheckboxDisabledChecked.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CheckboxDisabledChecked](examples/CheckboxDisabledChecked.html)

### Checkbox error

<ContentRack
    fields='
        "preview": {
            "src": "examples/CheckboxError.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CheckboxError.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CheckboxError](examples/CheckboxError.html)

### Checkbox required (validated)

<ContentRack
    fields='
        "preview": {
            "src": "examples/CheckoutRequiredValidated.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CheckoutRequiredValidated.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![CheckoutRequiredValidated](examples/CheckoutRequiredValidated.html)


### Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.custom-control`.

```html
<div class="custom-control custom-checkbox">
    <input class="custom-control-input" type="checkbox" value="" id="CocRz3dvysE">
    <label class="custom-control-label" for="CocRz3dvysE">
        Check this custom checkbox
    </label>
</div>
<div class="custom-control custom-checkbox">
    <input class="custom-control-input" type="checkbox" value="" id="zzIrIlYr64R" disabled>
    <label class="custom-control-label" for="zzIrIlYr64R">
        Check this custom checkbox disabled
    </label>
</div>
```

```html
<div class="custom-control custom-radio">
    <input class="custom-control-input" type="radio" id="W81HFtR5Qj5" name="radio-default">
    <label class="custom-control-label" for="W81HFtR5Qj5">
        Custom default radio
    </label>
</div>
<div class="custom-control custom-radio">
    <input class="custom-control-input" type="radio" id="l9Rg-__4SMF" name="radio-default">
    <label class="custom-control-label" for="l9Rg-__4SMF">
        Second custom default radio
    </label>
</div>
<div class="custom-control custom-radio">
    <input class="custom-control-input" type="radio" id="caz_fjEhjzl" disabled name="radio-default">
    <label class="custom-control-label" for="caz_fjEhjzl">
        Disabled custom radio
    </label>
</div>
```

### Inline

```html
<div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
    <label class="custom-control-label" for="customRadioInline1">
        Toggle this custom radio
    </label>
</div>
<div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
    <label class="custom-control-label" for="customRadioInline2">
        Or toggle this other custom radio
    </label>
</div>
```

### Select menu

Custom `<select>` menus need only a custom class, `.custom-select` to trigger the custom styles. Custom styles are limited to the `<select>`’s initial appearance and cannot modify the `<option>`s due to browser limitations.

```html
<label for="ZiiLYTFVw" class="select-label">Label for select</label>
<select class="custom-select" id="ZiiLYTFVw">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
```

## Disabled forms

Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers. Choose from the browser default validation feedback, or implement custom messages with our built-in classes.

> We currently recommend using custom validation styles, as native browser default validation messages are not consistently exposed to assistive technologies in all browsers (most notably, Chrome on desktop and mobile).

### How it works

Here’s how form validation works with CAKE:

* HTML form validation is applied via CSS’s two pseudo-classes, `:invalid` and `:valid`. It applies to `<input>`, `<select>`, and `<textarea>` elements.
* CAKE scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
* To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.
* As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for server side validation. They do not require a `.was-validated` parent class.
* Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript.
* All modern browsers support the [constraint validation API](https://www.w3.org/TR/html5/sec-forms.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.
* Feedback messages may utilize the browser defaults (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.
* You may provide custom validity messages with `setCustomValidity` in JavaScript.
* With that in mind, consider the following demos for our custom form validation styles, optional server side classes, and browser defaults.

### Custom styles

For custom CAKE form validation messages, you’ll need to add the novalidate boolean attribute to your `<form>`. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the `:invalid` and `:valid` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for `<select>`s are only available with `.custom-select`, and not `.form-control`.

### Server side

We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

## Input

### Text

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputText.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputText.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputText](examples/InputText.html)

### Label with sub text

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputLabelSubed.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputLabelSubed.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputLabelSubed](examples/InputLabelSubed.html)

### Disabled

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputDisabled.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputDisabled.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputDisabled](examples/InputDisabled.html)

### Invalid

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputInvalid.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputInvalid.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputInvalid](examples/InputInvalid.html)

### Valid

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputValid.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputValid.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputValid](examples/InputValid.html)


## Input group

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

### Input with icon inside

Inputs are wrapped inside a `.input-group` class, which enables possibility to add further content inside the displayed input.

```html
<label class="input-label" for="IwPS1xcy1hq">Label for Input</label>
<div class="input-group">
    <input class="form-control" type="text" id="IwPS1xcy1hq" placeholder="Input!"/>
</div>
```

### Example with icon

This can be used to, for example wrap icons inside an input field.

### Input with icon

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputIcon.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputIcon.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputIcon](examples/InputIcon.html)

### Input disabled with icon

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputDisabledWithIcon.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputDisabledWithIcon.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputDisabledWithIcon](examples/InputDisabledWithIcon.html)


### Customizing

Validation states can be customized via Sass with the `$form-validation-states` map. Located in our `_variables.scss` file, this Sass map is looped over to generate the default `valid`/`invalid` validation states. Included is a nested map for customizing each state's color and icon. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback.

Please note that we do not recommend customizing these values without also modifying the `form-validation-state` mixin.

```scss
// Sass map from `_variables.scss`
// Override this and recompile your Sass to generate different states
$form-validation-states: map-merge(
  (
    "valid": (
      "color": $form-feedback-valid-color,
      "icon": $form-feedback-icon-valid
    ),
    "invalid": (
      "color": $form-feedback-invalid-color,
      "icon": $form-feedback-icon-invalid
    )
  ),
  $form-validation-states
);

// Loop from `_forms.scss`
// Any modifications to the above Sass map will be reflected in your compiled
// CSS via this loop.
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, map-get($data, color), map-get($data, icon));
}
```

### Password toggle

Additionaly to the standard inputs we provide a special field for password inputs. This password inputfield will show an additional button to toggle the input form `type="password"` to `type="text"` and back. To toggle between these two types use the icon on the right side that is wrapped inside a button. To do so, you have to add a button with the classes `.inputfield-icon` and `.input-group-inside` applied to it.

Javascript is required (`js/form.js`) to be able to use the toggle functionality. This functionality changes the input type from password to text. When using our JavaScript plugin `form.js` you have to add the `data-controller="inputfield/password"` to the input element and the toggle-button with `data-controller="inputfield/password/toggle"` as attribute. Our JavaScript will automatically add the toggle functionality to this input group. If the toggle-button should be hidden, when the user has JavaScript disabled, you can simply add the class `.d-none` to the toggle-button. If now JavaScript is enabled on the users device, the `.d-none` class will be automatically removed and therefore the toggle-button will be shown.

### Password input

<ContentRack
    fields='
        "preview": {
            "src": "examples/InputPasswordToggle.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/InputPasswordToggle.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![InputPasswordToggle](examples/InputPasswordToggle.html)

## Select

### Select default

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectDefault](examples/SelectDefault.html)

### Select screen reader only label

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectSr.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectSr.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectSr](examples/SelectSr.html)

### Select with hidden option

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectHiddenOption.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectHiddenOption.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectHiddenOption](examples/SelectHiddenOption.html)

### Select with disabled option

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectDisablesOption.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectDisablesOption.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectDisablesOption](examples/SelectDisablesOption.html)

### Select with preselected option

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectPreselected.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectPreselected.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectPreselected](examples/SelectPreselected.html)

### Select with label sub text

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectLabelSubed.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectLabelSubed.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectLabelSubed](examples/SelectLabelSubed.html)

### Select disabled

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectDisabled.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectDisabled.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectDisabled](examples/SelectDisabled.html)

### Select error

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectError.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectError.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectError](examples/SelectError.html)

### Select success

<ContentRack
    fields='
        "preview": {
            "src": "examples/SelectSuccess.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/SelectSuccess.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![SelectSuccess](examples/SelectSuccess.html)
