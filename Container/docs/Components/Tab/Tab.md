<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Tab

The tab component is basically a list of any number of tab elements.

To create an tab you have to apply the classes `.btn-group` and `.tab` to any element you'd like. This element can have any number of `.tab-btn`s which should be any element, that is focus- and clickable by the user. To get the correct styling these elements need the classes `.btn` and `.tab-btn` applied to it. Additionaly you have to add the class `.active` to the tab button, which should be active on default. The previous and the following sibling (if there exists one) should also have the classes `.previous` and `.next` applied to it.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TabDefault.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TabDefault.html",
            "type": "content",
            "selector": "#showbox"
        }
    '
 />

![TabDefault](examples/TabDefault.html)

As you can see in the above example, the classes are obligatory for the correct display, especially on mobile resolutions.

## JavaScript behavior

You can use the CAKE's JavaScript `tab.js` to automatically apply the functionality of switching the active tab. The use of our JavaScript when calling `tab ();` will enable you three different methods of working with the tab component. The tabs are working with the interaction of the user with the different `tab/button`s, you can call the available methods of the tab component and you are able to receive status updates via the available event. If you want to add additional or to remove any of these features, you can simply extend or remove our JavaScript and build your own on top of the html and css skeleton you get by CAKE.

### Triggers

The triggers does automatically work with our JavaScript, as long as you have imported the `tab.js` script and applied the correct `data-controller` to the elements.

To enable the default behaviour shown above, you have to add the `data-controller="tab"` to the parent element `.tab.btn-group`. Additionally you have to apply the `data-controller="tab/button"` to each clickable element of your `.tab-btn.btn`. Besides, you're gonna have to add the class `.active` to exactly one `tab/button` element and to the previous and next sibling one of the corresponding classes `.prevous` or `.next`. If there is no previous or next sibling element, you can skip this class.

    <div class="btn-group tab" aria-label="Tab component" data-controller="tab" role="tablist">
        <button role="tab" type="button" data-controller="tab/button" class="btn tab-btn previous" aria-selected="false">First Tab</button>
        <button role="tab" type="button" data-controller="tab/button" class="btn tab-btn active" aria-selected="true">Active Tab</button>
        <button role="tab" type="button" data-controller="tab/button" class="btn tab-btn next" aria-selected="false">Third Tab</button>
    </div>

### Methods

| Method | Description |
|---|---|
| `element.nextTab ()` | Changes the active tab to the next one. If the last tab is already active nothing will happen and the method will return `false`. If the tab correctly changed, the method will return `true`. |
| `element.previousTab ()` | Changes the active tab to the previous one. If the first tab is already active nothing will happen and the method will return `false`. If the tab correctly changed, the method will return `true`. |
| `element.goToTab (index)` | Changes the active tab to the tab on position `index`. If the index is not available, because it is **&lt; 0** or **&gt; the number of tab buttons** the method will return `false`, otherwise `true`. |

    document.getElementById ("tab-selector").nextTab (); //returns true|false
    document.getElementById ("tab-selector").previousTab (); //returns true|false
    document.getElementById ("tab-selector").goToTab (2); //returns true|false

### Events

CAKE's tab plugin exposes a custom event for hooking into tab functionality.

| Event | Description |
|---|---|
| `tabChanged` | This event fires immediately when the index of active tab button has changed. |

    document.getElementById ("#tab-selector").addEventListener('tabChanged', (e) => {
        console.log (e.detail);
        // do something…
    });

The event `tabChanged` will give you information about the tab component the changes have been applied to. You can receive this information in the event-listener argument with `e.detail`. `e.detail` will be an object with the following properties:

* `tabElement`: tab element `[data-controller="tab"]`
* `elementsCount`: number of tab buttons available `[data-controller="tab/button"]`
* `oldIndex`: index of the previous active tab
* `oldElement`: tab button element of the previous active tab
* `activeIndex`: index of the new active tab
* `activeElement`: tab button element of the new active tab

*All indexes starts at __0__ for the first element and are __incremented by 1__ for each following item. Therefore the index of the last item is always `index = elementsCount - 1`*

You can use this informations to build your functionality on top of the tab component behaviour. For example you can show or hide additional content depending on the active tab button. In the example below the active tab changes automatically every 5000 milliseconds and the corresponding content will be displayed for each tab.

<ContentRack
    fields='
        "preview": {
            "src": "examples/TabWithExampleJavascriptFunctionality.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/TabWithExampleJavascriptFunctionality.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![TabWithExampleJavascriptFunctionality](examples/TabWithExampleJavascriptFunctionality.html)

## Accessibility

The parent element of component tab should always have the `role="tablist"` applied to it. This indicates that the content of this element is a list of clickable tab elements. These will have the `role="tab"` applied to it's elements. If you show different content to the user, depending on which tab button is active, each of the content elements should have a `role="tabpanel"`. More about the roles of this component can be read on <https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#tablist>

To describe the purpose of the tablist you should consider adding a `aria-label="…"` to the tab component.
Additionally the `aria-selected` attributes has to be applied to the `tab/button`s. Depending of the active state of the tab button, the value for this aria-attribute should be `false` when it's not active or `true` when it's active. This attribute will help screenreaders and other accessibility tools to give the correct important information to the user. If you display content on activating any tab button, you should also add the `aria-controls="…"` attribute to the `tab/button` with the id-reference to the content element.

To not only describe the tab buttons but the content elements via aria-attribtues, you have to add the `aria-labelledby="…"` and `aria-hidden="true|false"` attribute to the corresponding element. These attributes should of course also be updated with your JavaScript, if the displayed content changes. To see how this could work, have a look on the above example!
To get a better understanding on the accessibility of tabs, you can read [this](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html) article.
