import "./cakeDOM";
import themeSlider from "./themeSlider";

const _init_header = (closeMobileMenuBreakpoint = 960) => {
    document.addEventListener ('DOMContentLoaded', () => {
        //Select all Burger-Menus
        const headers = document.querySelectorAll ('*[data-controller="header"]');

        headers.forEach (header => {
            //Select all relevant Header-Items
            const burgerMenu = header.querySelector ('*[data-controller="header/burgermenu"]');
            const navigation = header.querySelector ('*[data-controller="header/navigation"]');

            //Do nothing, if required elements does not exist
            if (!burgerMenu || !navigation) {
                return;
            }

            //Init Tiny-Slider
            let sliderMainNav = null;
            let sliderSecNav = null;
            let defaultSliderSettings = {
                slideBy: 3,
                autoWidth: true,
            };

            const sliderMainNavButtonPrevious = header.querySelector ("*[data-toggle=\"header/navigation/menu/main/slider/prev\"]");
            const sliderMainNavButtonNext = header.querySelector ("*[data-toggle=\"header/navigation/menu/main/slider/next\"]");
            const sliderSubNavButtonPrevious = header.querySelector ("*[data-toggle=\"header/navigation/menu/sub/slider/prev\"]");
            const sliderSubNavButtonNext = header.querySelector ("*[data-toggle=\"header/navigation/menu/sub/slider/next\"]");
            const hasSubNavElement = !!header.querySelector (".header-subnavigation-list:not(.d-none)");

            //Header-Slider-Config
            const initSliders = () => {
                if (closeMobileMenuBreakpoint > window.innerWidth) {
                    return;
                }

                //Initialize Slider
                if (sliderMainNav === null) {
                    const sliderMainNavList = header.querySelector ("*[data-identifier=\"header/navigation/main\"]");
                    sliderMainNav = new themeSlider (
                        defaultSliderSettings,
                        false,
                        navigation,
                        sliderMainNavList,
                        sliderMainNavButtonPrevious,
                        sliderMainNavButtonNext
                    );
                    sliderMainNav.initialize ();
                }

                if (hasSubNavElement && sliderSecNav === null) {
                    const sliderSecNavListEl = header.querySelector (".header-subnavigation-list:not(.d-none)");
                    sliderSecNav = new themeSlider (
                        defaultSliderSettings,
                        false,
                        navigation,
                        sliderSecNavListEl,
                        sliderSubNavButtonPrevious,
                        sliderSubNavButtonNext
                    );
                    sliderSecNav.initialize ();
                }
            }
            const deconstructSliders = () => {
                if (sliderMainNav) {
                    sliderMainNav.terminate ();
                    sliderMainNav = null;
                }
                if (sliderSecNav) {
                    sliderSecNav.terminate ();
                    sliderSecNav = null;
                }
            }
            initSliders ();


            //Method to dispatch event
            const toggleMobileMenu = (opened, breakpointChange = false) => {
                //Show or Hide the Buttons and Menus
                if (opened) {
                    header.classList.add ("header-mobile-overlay");
                    burgerMenu.classList.add ('is-active');

                    deconstructSliders ();
                } else {
                    header.classList.remove ("header-mobile-overlay");
                    burgerMenu.classList.remove ('is-active');
                }

                // Dispatch/Trigger/Fire the event (before the change)
                header.dispatchEvent(new CustomEvent("open", {
                    detail: {
                        opened,
                        "breakpoint-has-changed": breakpointChange,
                    },
                }));

                if (!opened) {
                    initSliders ();
                }

                //Set Aria-Attributes for Accessibility
                burgerMenu.setAttribute ('aria-pressed', opened);
                navigation.setAttribute ('aria-expanded', opened);
            };

            //Add Click-Listener to the BurgerMenu-Button
            burgerMenu.addEventListener ('click', (event) => {
                event.preventDefault ();
                toggleMobileMenu (burgerMenu.classList.contains ('is-active') === false);
            });

            //Add Event-Listener to close mobile-menu on resize, when on breakpoint >md
            window.resizeThrottled (() => {
                if (closeMobileMenuBreakpoint <= window.innerWidth) {
                        toggleMobileMenu (false, true);
                }
            }, 200);
        });
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.header = _init_header;

export default (() => {
    _init_header();
});
