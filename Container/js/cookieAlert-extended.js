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
        window.cake.cookie.hideCookieBanner ();
    },
    //Show and initialize Cookie-Banner
    showCookieBannerWithoutForcedFocus: function () {
        return window.cake.cookie.showCookieBanner (false);
    },
    showCookieBanner: function (forceFocus) {
        if (forceFocus === undefined) {
            forceFocus = true;
        }
        window.cake.cookie._forceFocus = forceFocus;
        var extendedCookieAlert = document.querySelector ("*[data-controller='cookie-alert/extended']");
        //If not extended cookie-alert is available, just skip
        if (!extendedCookieAlert || extendedCookieAlert.classList.contains ("opened")) {
            return;
        }
        var cookieAlertModal = extendedCookieAlert.childNodes [0];
        var acceptAllButton = document.querySelector ("*[data-controller='cookie-alert/extended/button/accept']");
        var acceptConfigButton = document.querySelector ("*[data-controller='cookie-alert/extended/button/configuration']");
        var showDetailsLink = document.querySelector ("*[data-controller='cookie-alert/extended/detail-link']");
        var configurationDiv = document.querySelector ("*[data-controller='cookie-alert/extended/configuration']");

        //update overlay/alert size depending on viewport
        setTimeout (function () {
            window.cake.cookie._updateOverlaySize (extendedCookieAlert, acceptAllButton, true);
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
            } else {
                //Adjust details-text, if texts are available
                if (window.CookieConsent && window.CookieConsent.dialog) {
                    showDetailsLink.textContent = window.CookieConsent.dialog.showDetailsText;
                }
                configurationDiv.setAttribute ("aria-expanded", "false");
            }
        });

        //Display cookie banner
        extendedCookieAlert.setAttribute ('open', 'open');
        extendedCookieAlert.classList.add ("opened");
        extendedCookieAlert.style.display = "block";
    },
    //Deconstruct cookie banner
    hideCookieBanner: function () {
        var extendedCookieAlert = document.querySelector ("*[data-controller='cookie-alert/extended']");

        //Hide cookie banner
        extendedCookieAlert.removeAttribute ('open');
        extendedCookieAlert.classList.remove ("opened");
        extendedCookieAlert.style.display = "none";

        //update overlay/alert size to previous values
        window.cake.cookie._revertOverlaySize ();

        //Remove eventListeners
        window.cake.cookie._removeAllEventListeners ();
    },
    // bugfix - oldBrowser - Safari iOS viewport is initially bigger than the visible part (https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d)
    _tmpStylings: [],
    _updateOverlaySize: function (extendedCookieAlert, acceptAllButton, setEventListener) {
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
                window.cake.cookie._updateOverlaySize (extendedCookieAlert);
            }.bind (extendedCookieAlert));
            window.cake.cookie._addEventListener (window, "scroll", function () {
                //Prevent page from scrolling out of the cookie-alert
                window.scrollTo (0, 0);
            }.bind (extendedCookieAlert));

            //Keep focus inside the cookie-alert element, if option is set to true
            if (window.cake.cookie._forceFocus) {
                extendedCookieAlert.querySelectorAll ("button,a,input").forEach (function (element) {
                    window.cake.cookie._addEventListener (element, "focusout", function () {
                        setTimeout (function () {
                            //Prevent page from scrolling out of the cookie-alert
                            if (!extendedCookieAlert.contains(document.activeElement)) {
                                acceptAllButton.focus ();
                            }
                        }, 20);
                    });
                });

                document.querySelectorAll ('[tabindex="1"]').forEach (function (element) {
                    if (!extendedCookieAlert.contains(element)) {
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

        extendedCookieAlert.style.height = window.innerHeight + "px";

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
