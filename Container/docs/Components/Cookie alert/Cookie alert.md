<AlertWarning alertHeadline="Deprecated">
The simple version with notice banner will be deprecated in future releases. Due to legal requirements the extended cookie alert with settings must be used.
</AlertWarning>

<AlertInfo alertHeadline="Modifiable">
Please ensure to comply with the corporate identity.
</AlertInfo>

# Cookie Alert

Inform the user about cookies with the cookie alert. Place it on top of the header, ideally as the very first element. The cookie alart has his own `.container-responsive`, so it is not recommended to wrappe it in an `container`, `container-fluid` At the breakpoints `xs` and `sm`, it is shown `fixed` on the bottom of the screen. This component is using the [Button](button.md) component. So you have to **include the Button component CSS** to use the cookie alert.

Add the class `.cookie-alert` to an element, we recommend to use a `div`. This element contains two areas: `.cookie-alert-content` with the content and `.cookie-alert-button-wrapper` for the OK button, both are wrapped by "`.container-responsive py-1`". If you are using elements like `p` tags for the content, be sure to controll the margins to the edges of the container `.cookie-alert-content` with something like `.m-0`.

<ContentRack
    fields='
        "preview": {
            "src": "examples/CookieAlertExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CookieAlertExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

![CookieAlertExample](examples/CookieAlertExample.html)

## JavaScript behavior

You can use the CAKE's JavaScript `cookieAlert.js` to automatically apply the closing functionality. The use of our JavaScript when calling `cookieAlert();` will enable you to catch an event for your customization.
To ensure, that the `cookieAlert.js` can do his work, the button needs the `data-controller="cookie-alert/button"` attribute and the main container with the class `.cookie-alert` needs the `data-controller="cookie-alert"` attribute. If the `data-controller="cookie-alert/button"` was clicked, the class `.cookie-alert-hide` is set to the `data-controller="cookie-alert"` element.

### Events

`cookieAlertClicked` is fired if the `click` event on the `data-controller="cookie-alert/button"` was triggered. You can use this for your special behaviors.

#### Cookie alert and header

<ContentRack
    fields='
        "preview": {
            "src": "examples/CookieAlertWithHeader.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CookieAlertWithHeader.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe src="examples/CookieAlertWithHeader.html" style="min-height: 23.5rem" title="Cookie alert and header" alt="CookieAlertWithHeader" />

## Extended Cookie Banner

In order to be legally on the safe side, the extended cookie banner must be used in most cases. This modal informs the user about cookies and also gives the user the possibility to set his personal cookie preferences. This cookie banner is designed as an overlay because it is legally required that the user first acts with this element before he can use the site.

This component uses the [button component](../Button/Button.md) and the checkbox of the [form component](../Form/Form.md). Therefore you have to include the CSS of these both components in order to get the extended cookie alert displayed correctly!

<ContentRack
    fields='
        "preview": {
            "src": "examples/CookieAlertExtendedExample.html",
            "type": "link"
        },
        "<html>":{
            "src": "examples/CookieAlertExtendedExample.html",
            "type": "content",
            "selector": "#app"
        }
    '
 />

<Iframe src="examples/CookieAlertExtendedExample.html" style="min-height: 28.5rem; max-height: 28.5rem;" title="Cookie alert extended" alt="CookieAlertExtendedExample" />

The extended cookie alert uses the `<dialog>` element. In order to get the correct styling applied to it, you have to use the `.cookie-alert-extended` class.
This dialog element is the transparent black background. Inside this `<dialog>` element you should create a `<div>` with the class `.cookie-alert-extended-modal` applied to it. This is the wrapper element for all the content elements of this component:

* title as a `<h2>` element with the class `.h5`
* description as a `<p>` tag and the class `.cookie-alert-extended-description`
* more-details link `.cookie-alert-extended-detail-link`
* *accept all* cookies button
* the cookie configuration collapsible `<div>` `.cookie-alert-configuration`
  * the checkboxes wrapper `<div>` `.cookie-alert-configuration-settings`
    * the labels of each checkbox `.cookie-alert-extended-checkbox-label`
  * the *accept configuration* button

The detailed structure of this component can be seen in the above example. Best practice is to the cookie alert component as the first element in the body of each page. Additionaly it is mandatory to place a link to your cookie-information page into the description text! **Be aware, that on the cookie-information page there shouldn't be any cookie-alert. Because otherwise the visitor is not able to read the information before accepting anything. Thus you should not save or use any cookies on this page because the visitor has not accepted anything.**

### Accessibility

Because this component is a legal requirement, special attention should be paid to good accessibility! One important thing is to not use a `<div>` but a `<dialog>` element to tell especially screenreaders that this element is an overlay which stays in front of other content. Also some aria-attributes should be added. The `aria-labelledby` and the `aria-describedby` attributes should reference to the appropriate element in the modal (title and description). Also the special `open` attribute of the `<dialog>` element should get set correctly. You can find a description of this html element on it's dedicated page on the [MDN web docs](https://developer.mozilla.org/de/docs/Web/HTML/Element/dialog). It's also a good practice to set the [role element](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) (`role="dialog"`) for supporting browsers. The modal div (`.cookie-alert-extended-modal`) has the attribute `aria-modal="true"` attatched to it.

For the collapsable cookie configuration at the bottom of the cookie dialog, you should add `aria-controls="id"`. The configuration (`.cookie-alert-configuration`) needs also some additional attributes for accessibility: `aria-controls="id"`, `aria-labelledby="id"`, `aria-expanded="false"`. What these attributes are doing can be read in the two examples [W3: dialog-modal](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) and [W3: accordion](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html).

To also get the correct tab order for users only using their keyboard or other tools, the tabindex of the *accept all* button should be set to `tabindex="1"` and all the other clickable elements of the extended cookie alert to `tabindex="2"`. So the user first must tab through the cookie alert, before accessing the website itself. The *accept all* button has tabindex 1 because this element should have the inital focus.

### JavaScript

With our JavaScript we have focused on the usage in [CookieBot](https://cookiebot.com/) because this is the most used tool by our users. Because of that we have written this component's JavaScript in the "old-fashioned" way with `ES5 syntax`. This way you can simply copy paste our JavaScript into your *CookieBot* console. But more to this further below.

To make your `HTML` work with our JavaScript, you have to apply the coorect `data-controller`s. Every element, that causes some JavaScript code execution needs one of the following attributes:

* the `<dialog>` element should have the attribute `data-controller="cookie-alert/extended"` attatched to it
* the more details link `.cookie-alert-extended-detail-link` has the attribute `data-controller="cookie-alert/extended/detail-link"`
* for the *accept all* button `data-controller="cookie-alert/extended/button/accept"`
* the configuration element `.cookie-alert-configuration` needs the `data-controller="cookie-alert/extended/configuration"` attribtue attatched
* the *accept configuration* button has the attribute `data-controller="cookie-alert/extended/button/configuration"`

Our JavaScript parses the elements with the above mentioned `data-attributes` and adds three click event listener to the two buttons (*accept all* and *accept configuration*) and to the *more details* link.
The JavaScript of this component exposes three methods that can be used:

#### Accept cookies

`window.cake.cookie.acceptCookies: function (optinPreferences, optinStatistics, optinMarketing) {…}`. This method simply saves the configuration set by the user. If the user for example clicks the *accept all* button, all three parameters are set to `true`:

    acceptAllButton.addEventListener ("click", function () {
        window.cake.cookie.acceptCookies (true, true, true);
    });

#### Show cookie banner

`window.cake.cookie.showCookieBanner: function () {…}`. With this method you can show the extended cookie banner and initialize all the event listeners needed by this component.

    window.cake.cookie.showCookieBanner (forcedFocus = true);

This method has also an optional property `forcedFocus`, which can force the customers browser to keep focus on the relevant elements of our extended cookie alert. This property is set to `true` as default but if `forcedFocus` is set to `false`, it will not change anything in the default focus handling of the browser.

#### Hide cookie banner

`window.cake.cookie.hideCookieBanner: function () {…}` This method simply hides the extended cookie banner and removes all events added in the function above. **But please be sure to save the cookie configuration before with the first method mentioned!**

    window.cake.cookie.hideCookieBanner ();


## CookieBot integration

### Set up the template

We have developed our extended cookie alert especially for the [CookieBot website](https://cookiebot.com/). This means that this component also works with the [CookieBot console](https://manage.cookiebot.com/en/manage).

To set our component as your cookie-bot consent, just log into your [CookieBot console](https://manage.cookiebot.com/en/manage) and switch to the Domain group you'd like to adjust. In this dashboard you have to switch to the *Dialog* tab.
There you have to set the *Template* to `Custom` and the *Method* to `Explicit Consent` like in the following example. Depending on your language these fields could have a different name.

![Setting up the cookiebot templates](assets/cookiebot/dialog.png)

Afterwards you should be able to see 3 different textareas:

* HTML
* CSS
* Javascript

You can simply copy our sourcecode templates from the textareas below into the appropriate field.

#### HTML

![CookieAlertExtendedHTML](examples/CookieAlertExtendedHTML.html)

#### CSS

![CookieAlertExtendedCSS](examples/CookieAlertExtendedCSS.html)

#### JavaScript

![CookieAlertExtendedJavaScript](examples/CookieAlertExtendedJavaScript.html)

In addition you have to adjust the `Name of function to show banner` and the `Name of function to hide banner` with the following values like in the screenshot below:

* Name of function to show banner: `window.cake.cookie.showCookieBanner`
* Name of function to show banner without forcing the browser focus to stay on the exetended cookie alert: `window.cake.cookie.showCookieBannerWithoutForcedFocus`
* Name of function to hide banner: `window.cake.cookie.hideCookieBanner`

![Setting up the cookiebot function values](assets/cookiebot/functions.png)

### Set up the content

You can enter the content for our component as usual via the [CookieBot console](https://manage.cookiebot.com/en/manage). To do this, switch to the content tab and then create the texts, if not already done.

> #### Special exception when maintaining the content!
>
> But you have to pay attention to a special exception when maintaining the content! The field `Decline button text` is not the text for a reject button, but for the button `accept configuration`.
> This had to be solved this way, because CookieBot unfortunately does not allow any further individual text fields.

![Setting up the cookiebot content](assets/cookiebot/content.png)
