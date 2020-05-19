import "./cakeDOM";
import { tns } from "tiny-slider/src/tiny-slider";


class themeSlider {

    constructor (
        sliderConfig = {},
        autoInitialize = true,
        sliderWrapperEl = document.querySelector ('*[data-toggle="theme-slider"]'),
        sliderListEl = null,
        previousButtonEl = null,
        nextButtonEl = null,
    ) {
        //Chek if SliderWrapperEl exists
        this.sliderWrapperEl = sliderWrapperEl;
        if (!this.sliderWrapperEl) {
            console.warn ("Theme-Slider:", "sliderWrapperEl is no valid HTMLElement", sliderWrapperEl);
        }

        //Check if all the other elements has to be set
        this.sliderListEl = sliderListEl;
        if (!this.sliderListEl) {
            this.sliderListEl = this.sliderWrapperEl.querySelector ('*[data-toggle="theme-slider-slides"]');
        }
        this.previousButtonEl = previousButtonEl;
        if (!this.previousButtonEl) {
            this.previousButtonEl = this.sliderWrapperEl.querySelector ('*[data-toggle="theme-slider-previous"]');
        }
        this.nextButtonEl = nextButtonEl;
        if (!this.nextButtonEl) {
            this.nextButtonEl = this.sliderWrapperEl.querySelector ('*[data-toggle="theme-slider-next"]');
        }

        //Set Slider-Config and overwrite defaults
        this.sliderConfig = {
            container: this.sliderListEl,
            controls: false,
            nav: false,
            axis: 'horizontal',
            loop: false,
            swipeAngle: false,
            arrowKeys: false, //prevent slide with arrow-keys
            touch: true,
            mouseDrag: false,
            speed: 350,
            // edgePadding: 8,
            ...sliderConfig,
        };

        //Some default Class-Attributes
        this.slider = null;
        this.timeouts = [];
        this.garbageCollection = {};

        //Initialize Slider, if set up in config
        if (autoInitialize) {
            this.initialize ();
        }
    }

    static initializeAllSliders (sliderConfig = {}) {
        //Fetch all existing Sliders and initialize them
        document.addEventListener ('DOMContentLoaded', () => {
            let themeSliderElements = document.querySelectorAll ('*[data-toggle="theme-slider"]');
            themeSliderElements.forEach ((themeSliderElement) => {
                new themeSlider ({
                    slideBy: 'page',
                    gutter: 8,
                    fixedWidth: 120, //Needs to be set, to make page-slide possible
                    responsive: {
                        600: {
                            fixedWidth: sliderConfig.fiexedWidth ? sliderConfig.fixedWidth : 160,
                        }
                    },
                    ...sliderConfig,
                }, true, themeSliderElement);
            });
        });
    }

    initialize () {
        //Only initialize once
        if (this.slider) {
            return;
        }

        //Remove no-js behaviour
        this.garbageCollection.sliderNoJsAvailable = this.sliderWrapperEl.classList.contains ('theme-slider-nojs');
        if (this.garbageCollection.sliderNoJsAvailable) {
            this.sliderWrapperEl.classList.remove ('theme-slider-nojs');
        }
        //Set overflow:hidden on wrapper element, so that tiny-slider does work
        this.garbageCollection.sliderWrapperElStyleOverflow = this.sliderWrapperEl.style.overflow;
        this.sliderWrapperEl.style.overflow = "hidden";

        //Initialize Slider
        this.slider = tns (this.sliderConfig);

        //**                     */
        //**    EVENT-LISTENERS  */
        //**                     */

        //Add Resize Event listener
        window.resizeThrottled (() => {
            this.refreshSlider ();
        }, 300);


        //Add Click Event listener
        const isDefaultSliding = this.sliderConfig.slideBy !== "page" || this.sliderConfig.fixedWidth;
        this.garbageCollection.previousButtonClickEvent = () => {
            if (isDefaultSliding) {
                this.slider.goTo('prev');
            } else {
                this.slider.goTo(this.calculateNewIndex ("prev"));
            }
        };
        this.previousButtonEl.addEventListener ('click', this.garbageCollection.previousButtonClickEvent);
        this.garbageCollection.nextButtonClickEvent = () => {
            if (isDefaultSliding) {
                this.slider.goTo('next');
            } else {
                this.slider.goTo(this.calculateNewIndex ("next"));
            }
        };
        this.nextButtonEl.addEventListener ('click', this.garbageCollection.nextButtonClickEvent);


        this.slider.events.on ('transitionEnd', (sliderInfo) => {
            //Update Button visibility
            setTimeout (() => this.updateButtonOpacity (), 50);
        });


        //Initialize Slider
        this.refreshSlider (true);
    }

    terminate () {
        //Only terminate once
        if (!this.slider) {
            return;
        }

        //Remove button events
        this.previousButtonEl.removeEventListener ("click", this.garbageCollection.previousButtonClickEvent);
        this.nextButtonEl.removeEventListener ("click", this.garbageCollection.nextButtonClickEvent);

        //Hide buttons
        this.showButton (this.previousButtonEl, false);
        this.showButton (this.nextButtonEl, false);

        //Remove slider-item focus events
        this.garbageCollection.sliderItemFocusEvents.forEach (sliderItemFocusEvent => {
            sliderItemFocusEvent.el.removeEventListener ("focus", sliderItemFocusEvent.event);
        });

        //Add no-js behaviour, if it was available before
        if (this.garbageCollection.sliderNoJsAvailable) {
            this.sliderWrapperEl.classList.add ('theme-slider-nojs');
        }
        //Reverse overflow on wrapper element, so that it has the previous status
        this.sliderWrapperEl.style.overflow = this.garbageCollection.sliderWrapperElStyleOverflow;

        //Deconstruct slider
        this.slider.destroy ();
        this.slider = null;

        //Delte garbage-collection tmp-variable
        this.garbageCollection = {};
    }

    //Detects the actual status of the slider
    //returns: start | middle | end | disabled
    get sliderStatus () {
        const sliderInfo = this.info;

        //Check if slider is disabled
        if (!sliderInfo.isOn)
            return "disabled";

        //Check if all slider-items are visible at once
        if (sliderInfo.displayIndex === 1 && sliderInfo.slideCountNew - sliderInfo.slideBy <= 0)
        return "disabled";

        //Check if there are not all items visible
        if (sliderInfo.index + sliderInfo.slideBy >= sliderInfo.slideCountNew)
            return "end";

        //calculate bounding boxes of the slider and ul element
        const themeSliderRect = this.sliderWrapperEl.getBoundingClientRect ();
        const sliderRect = this.sliderListEl.getBoundingClientRect ();
        const lastItemRect = sliderInfo.slideItems [sliderInfo.slideItems.length -1].getBoundingClientRect ();
        let positionDiff = ((sliderRect.x || sliderRect.left) + sliderRect.width) - ((themeSliderRect.x || themeSliderRect.left) + themeSliderRect.width);

        //Check if on index = 1 and last item is visible => disabled
        if (sliderInfo.displayIndex === 1 && lastItemRect.right <= themeSliderRect.right) {
            return "disabled";
        }

        //Check if last item.right is the same value than themeSliderRect.right
        if (Math.round (lastItemRect.right) <= Math.round (themeSliderRect.right)) {
            return "end";
        }

        //Check if slider is on end (if last item is fully visible in viewport)
        if ((sliderRect.x || sliderRect.left) + sliderRect.width <= (themeSliderRect.x || themeSliderRect.left) + themeSliderRect.width + this.sliderConfig.gutter)
            return "end";

        //Check if slider is disabled (last item in puffer at the end)
        if (positionDiff < this.sliderConfig.gutter + 1 && positionDiff > 0)
            return "disabled";

        //Check if slider is on start (first item as display-index)
        if (sliderInfo.displayIndex === 1)
            return "start";

        //Otherwise the slider is in middle
        return "middle";
    }

    get info () {
        return this.slider.getInfo ();
    }

    //Find out somehow, how many items are fully visible in the slider
    get itemsVisiblePerPage () {
        const sliderItems = this.info.slideItems;
        const sliderContainerRect = this.sliderWrapperEl.getBoundingClientRect ();
        let visibleOnOnePage = 0;
        for (let sliderItem of sliderItems) {
            const sliderItemRect = sliderItem.getBoundingClientRect ();
            if (sliderItemRect.left >= sliderContainerRect.left && sliderItemRect.right <= sliderContainerRect.right) {
                visibleOnOnePage++;
            }
        }
        return visibleOnOnePage;
    }

    calculateNewIndex (direction = "next") {
        const sliderItemCount = this.info.slideCountNew;
        const visibleOnOnePage = this.itemsVisiblePerPage;

        let newIndex = 0;
        if (direction === "next") {
            newIndex = this.info.index + visibleOnOnePage;
            if (newIndex >= sliderItemCount - visibleOnOnePage) {
                newIndex = sliderItemCount - visibleOnOnePage + 1;
            }
        } else {
            newIndex = this.info.index - visibleOnOnePage;
            if (newIndex < 0) {
                newIndex = "first";
            }
        }
        return newIndex;
    }

    //Hide and Show the Previos and Next Buttons
    showButton (buttonEl, show = true, init = false) {
        if (show) {
            if (buttonEl.style.opacity != 1 || init) {
                if (this.timeouts.length > 0) {
                    clearTimeout (this.timeouts.shift ());
                }
                buttonEl.disabled = false;
                buttonEl.style.display = 'block';
                setTimeout (() => {
                    buttonEl.style.opacity = 1;
                }, 10);
                buttonEl.setAttribute ('aria-hidden', 'false');
            }
        } else {
            if (buttonEl.style.opacity != 0 || init) {
                buttonEl.style.opacity = 0;
                buttonEl.setAttribute ('aria-hidden', 'true');
                this.timeouts.push(setTimeout ((buttonEl) => {
                    buttonEl.disabled = true;
                    buttonEl.style.display = 'none';
                }, this.sliderConfig, buttonEl));
            }
        }
    };

    //Decide which button should hide and show
    updateButtonOpacity (init = false) {
        switch (this.sliderStatus) {
            case "start":
                this.showButton (this.previousButtonEl, false, init);
                this.showButton (this.nextButtonEl, true, init);
                break;
            case "end":
                this.showButton (this.previousButtonEl, true, init);
                this.showButton (this.nextButtonEl, false, init);
                break;
            case "middle":
                this.showButton (this.previousButtonEl, true, init);
                this.showButton (this.nextButtonEl, true, init);
                break;
            case "disabled":
                this.showButton (this.previousButtonEl, false, init);
                this.showButton (this.nextButtonEl, false, init);
                break;
        }
    }

    //Refresh Slider on Resize and Initially to correct position changes
    refreshSlider (init = false) {
        if (!this.slider) {
            return;
        }
        //Update Slider
        this.slider.refresh ();

        if (init) {
            this.initializeSliderFocusListener ();
        }

        //Update Buttons
        this.updateButtonOpacity (init);
    };

    //Initialize Slider-Focus listener
    initializeSliderFocusListener () {
        this.garbageCollection.sliderItemFocusEvents = [];
        const sliderInfo = this.info;
        const sliderElementCount = sliderInfo.slideItems.length;
        for (let i = 0; i < sliderElementCount; i++) {
            const sliderItem = sliderInfo.slideItems [i];
            const focusEvent = (e) => {
                const sliderInfo = this.info;

                let index = sliderInfo.index;
                if (i <= sliderInfo.index) {
                    //prev
                    index = i - sliderInfo.slideBy + 1
                } else if (i === (sliderInfo.slideBy + sliderInfo.index) - 1) {
                    //next
                    index = i - 1;
                }

                index = index < 0 ? 0 : index;
                index = index > sliderElementCount - sliderInfo.slideBy ? sliderElementCount - sliderInfo.slideBy : index;
                if (index !== sliderInfo.index) {
                    this.slider.goTo (index);
                }
            };
            this.garbageCollection.sliderItemFocusEvents.push ({
                el: (sliderItem.firstElementChild || sliderItem.firstChild),
                event: focusEvent});
            (sliderItem.firstElementChild || sliderItem.firstChild).addEventListener ("focus", focusEvent);
        }
    }

}

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.themeSlider = themeSlider;

export default themeSlider;
