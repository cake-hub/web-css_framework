/* Show/Remove Theme-Specific content */

document.addEventListener ("DOMContentLoaded", () => {
    const theme = localStorage.getItem ("theme");
    const themeClassIdentifier = "only-theme",
    isThemeClassIdentifier = "is-theme-" + theme;

    const themeElements = Array.prototype.slice.call(document.querySelectorAll ("." + themeClassIdentifier));
    themeElements.forEach (themeElement => {
        if (!themeElement.classList.contains (isThemeClassIdentifier)) {
            themeElement.parentNode.removeChild (themeElement);
        }
    });
});

/* Prevent anchor links from jumping */

document.addEventListener ("DOMContentLoaded", () => {
    const anchorClickEvent = (e) => {
        e.preventDefault ();
        return false;
    };

    const linkElements = Array.prototype.slice.call(document.getElementsByTagName ("a"));
    linkElements.forEach (linkElement => {
        if (linkElement.href.substr (0, 1) === "#" || linkElement.href.substr (-1) === "#") {
            linkElement.addEventListener ("click", anchorClickEvent);
        }
    });
});


/* Initialize extended cookie alert */

document.addEventListener ("DOMContentLoaded", () => {
    if (!window.cake) {
        window.cake = {};
    }
    if (window.cake.cookie && window.cake.cookie.showCookieAlert) {
        window.cake.cookie.showCookieAlert ();
    }
});

/* Handle theme switch in url-param */

document.addEventListener('DOMContentLoaded', () => {
    const themeHandlerName = "theme";
    let theme = localStorage.getItem (themeHandlerName) || defaultTheme;

    //Check if query-parameter exists in url
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(themeHandlerName)) {
        theme = urlParams.get(themeHandlerName);
    }

    //Update if theme has changed, or first theme needs to be set
    if (!localStorage.getItem (themeHandlerName)) {
        localStorage.setItem (themeHandlerName, theme);
    } else if (localStorage.getItem (themeHandlerName) !== theme) {
        localStorage.setItem (themeHandlerName, theme);
        location.reload ();
    }
});
