# Browser focus

The browser focus is indicated by a visible "outline". In order to get this visible highlight, the element that is currently focused, get's a `box-shadow` applied with `3px` width and the `primary` color with an opacity of `0.5`. The box-shadow has no offset and also no blur-radius.
The only exceptions are focus-able elements with the error sate applied to it. In these cases the `box-shadow` has the `danger` color with an opacity of `0.5`.

We decided to create an alternative browser focus because elements like our checkboxes or radio buttons don't have a focus by default.
Please note that you must add our personalized browser focus to any element that does not have a visible focus and is focusable.
