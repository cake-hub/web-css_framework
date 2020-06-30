if (typeof window.cake !== "object") {
    window.cake = {};
}

 window.cake.cookie = {
    //Add Event Listeners
    _eventListeners: [],
    _forceFocus: true,
    _addEventListener: function (element, listenerType, listenerFunction) {
        window.cake.cookie._eventListeners.push ({
            element: element,
            listenerFunction: listenerFunction,
            listenerType: listenerType
        });
        element.addEventListener (listenerType, listenerFunction);
    },
    _removeAllEventListeners: function () {
        window.cake.cookie._eventListeners.forEach (function (listenerConfig) {
            listenerConfig.element.removeEventListener (listenerConfig.listenerType, listenerConfig.listenerFunction);
        });
    },
    //Set cookie settings and hide cookie
    acceptCookies: function (optinPreferences, optinStatistics, optinMarketing) {
        if (window.Cookiebot) {
            window.Cookiebot.submitCustomConsent(optinPreferences, optinStatistics, optinMarketing);
        }
        window.cake.cookie.hideCookieAlert ();
    },
    //Show and initialize cookie alert
    showCookieAlertWithoutForcedFocus: function () {
        return window.cake.cookie.showCookieAlert (false);
    },
    showCookieAlert: function (forceFocus) {
        if (forceFocus === undefined) {
            forceFocus = true;
        }
        window.cake.cookie._forceFocus = forceFocus;
        var cookieAlert = document.querySelector ("*[data-controller='cookie-alert']");
        //If not cookie-alert is available, just skip
        if (!cookieAlert || cookieAlert.classList.contains ("opened")) {
            return;
        }
        var cookieAlertModal = cookieAlert.childNodes [0];
        var acceptAllButton = document.querySelector ("*[data-controller='cookie-alert/button/accept']");
        var acceptConfigButton = document.querySelector ("*[data-controller='cookie-alert/button/configuration']");
        var showDetailsLink = document.querySelector ("*[data-controller='cookie-alert/detail-link']");
        var configurationDiv = document.querySelector ("*[data-controller='cookie-alert/configuration']");
        var acceptAllButtonTabIndex = acceptAllButton.tabindex;

        //update overlay/alert size depending on viewport
        setTimeout (function () {
            window.cake.cookie._updateOverlaySize (cookieAlert, acceptAllButton, true);
        }, 100);

        window.cake.cookie._addEventListener (acceptAllButton, "click", function () {
            window.cake.cookie.acceptCookies (true, true, true);
        });
        window.cake.cookie._addEventListener (acceptConfigButton, "click", function () {
            var preferenceCookies = document.getElementById ("preferences").checked || false;
            var statisticsCookies = document.getElementById ("statistics").checked || false;
            var marketingCookies = document.getElementById ("marketing").checked || false;
            window.cake.cookie.acceptCookies (preferenceCookies, statisticsCookies, marketingCookies);
        });
        window.cake.cookie._addEventListener (showDetailsLink, "click", function () {
            configurationDiv.classList.toggle("expanded");
            showDetailsLink.classList.toggle("expanded");

            if (configurationDiv.classList.contains ("expanded")) {
                //Adjust details-text, if texts are available
                if (window.CookieConsent && window.CookieConsent.dialog) {
                    showDetailsLink.textContent = window.CookieConsent.dialog.hideDetailsText;
                }
                configurationDiv.setAttribute ("aria-expanded", "true");
                cookieAlertModal.scrollTop = cookieAlertModal.scrollHeight;

                // Make acceptAllButton disabled
                acceptAllButton.disabled = true;
                acceptAllButton.tabindex = "-1";

            } else {
                //Adjust details-text, if texts are available
                if (window.CookieConsent && window.CookieConsent.dialog) {
                    showDetailsLink.textContent = window.CookieConsent.dialog.showDetailsText;
                }
                configurationDiv.setAttribute ("aria-expanded", "false");

                // Make acceptAllButton enabled
                acceptAllButton.disabled = false;
                acceptAllButton.tabindex = acceptAllButtonTabIndex;
            }
        });

        //Display cookie alert
        cookieAlert.setAttribute ('open', 'open');
        cookieAlert.classList.add ("opened");
        cookieAlert.style.display = "block";
    },
    //Deconstruct cookie alert
    hideCookieAlert: function () {
        var cookieAlert = document.querySelector ("*[data-controller='cookie-alert']");

        //Hide cookie alert
        cookieAlert.removeAttribute ('open');
        cookieAlert.classList.remove ("opened");
        cookieAlert.style.display = "none";

        //update overlay/alert size to previous values
        window.cake.cookie._revertOverlaySize ();

        //Remove eventListeners
        window.cake.cookie._removeAllEventListeners ();
    },
    // bugfix - oldBrowser - Safari iOS viewport is initially bigger than the visible part (https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d)
    _tmpStylings: [],
    _updateOverlaySize: function (cookieAlert, acceptAllButton, setEventListener) {
        if (setEventListener === true) {
            window.cake.cookie._tmpStylings.push ({
                el: document.body,
                val: document.body.style.overflow,
                attr: "overflow"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.body,
                val: document.body.style.height,
                attr: "height"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.documentElement,
                val: document.documentElement.style.overflow,
                attr: "overflow"
            });
            window.cake.cookie._tmpStylings.push ({
                el: document.documentElement,
                val: document.documentElement.style.height,
                attr: "height"
            });
            window.cake.cookie._addEventListener (window, "resize", function () {
                //On resize or orientation switch, update the size of the alert
                window.scrollTo (0, 0);
                window.cake.cookie._updateOverlaySize (cookieAlert);
            }.bind (cookieAlert));
            window.cake.cookie._addEventListener (window, "scroll", function () {
                //Prevent page from scrolling out of the cookie-alert
                window.scrollTo (0, 0);
            }.bind (cookieAlert));

            //Keep focus inside the cookie-alert element, if option is set to true
            if (window.cake.cookie._forceFocus) {
                cookieAlert.querySelectorAll ("button,a,input").forEach (function (element) {
                    window.cake.cookie._addEventListener (element, "focusout", function () {
                        setTimeout (function () {
                            //Prevent page from scrolling out of the cookie-alert
                            if (!cookieAlert.contains(document.activeElement)) {
                                acceptAllButton.focus ();
                            }
                        }, 20);
                    });
                });

                document.querySelectorAll ('[tabindex="1"]').forEach (function (element) {
                    if (!cookieAlert.contains(element)) {
                        element.dataset.oldTabIndex = "1";
                        element.setAttribute ('tabindex', 0);
                    }
                });
                document.querySelectorAll ('[tabindex="2"]').forEach (function (element) {
                    element.dataset.oldTabIndex = "2";
                    element.setAttribute ('tabindex', 0);
                });
            }

        }

        cookieAlert.style.height = window.innerHeight + "px";

        document.body.style.overflow = "hidden";
        document.body.style.height = window.innerHeight + "px";

        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.height = window.innerHeight + "px";
    },
    _revertOverlaySize: function () {
        window.cake.cookie._tmpStylings.forEach (function (tmpStyling) {
            tmpStyling.el.style [tmpStyling.attr] = tmpStyling.val;
        });
        if (window.cake.cookie._forceFocus) {
            document.querySelectorAll ('[data-old-tab-index="1"]').forEach (function (element) {
                element.removeAttribute ("data-old-tab-index");
                element.setAttribute ('tabindex', 1);
            });
            document.querySelectorAll ('[data-old-tab-index="2"]').forEach (function (element) {
                element.removeAttribute ("data-old-tab-index");
                element.setAttribute ('tabindex', 2);
            });
        }
    }
};
