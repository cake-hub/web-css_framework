<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Accordion

Toggle the visibility of content across your project with a few classes and out additional Javascript plugin (only for accessibility).

## How it works

A radio or checkbox is used to show and hide content. A label with an additional `role` attribute is used to trigger a toggle of the div with class `.accordion-collapse` . Collapsing an element will animate the `max-height` from it’s current value to `0`.

## Accordion example

Using the following syntax, you can use a collapse behavior to create the accordion.

### multiple

<ContentRack
    fields='
        "preview": {
            "src": "examples/AccordionMultiple.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AccordionMultiple.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![AccordionMultiple](examples/AccordionMultiple.html)

Instead of a `type="checkbox"` you can simply use the `type="radio"` to make only a single accordion-item extensible at once.
If you wantan accordion-item to be extended on page load, simply set the `input` to `checked`.

### single

<ContentRack
    fields='
        "preview": {
            "src": "examples/AccordionSingle.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/AccordionSingle.html",
            "type": "content",
            "selector": "#showBox"
        }
    '
 />

![AccordionSingle](examples/AccordionSingle.html)

## Accessibility

Be sure to add `aria-expanded` to the label element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you’ve set the collapsible element to be open by default set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via Javascript).

If your control element is targeting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.
