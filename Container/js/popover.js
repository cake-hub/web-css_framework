import "./cakeDOM";
import tippy from "tippy.js";

const _init_popover = (elements = '*[data-tippy-content]', globalConfiguration = {
    animation: 'fade',
    arrow: true,
    content: "popover",
    theme: "gray",
    flip: true,
    interactive: true,
    delay: 200,
    touch: true,
    allowHTML: false,
    appendTo: 'parent',
    onMount({ reference }) {
        reference.setAttribute('aria-expanded', 'true')
    },
    onHide({ reference }) {
        reference.setAttribute('aria-expanded', 'false')
    },
}) => {
    //Initialize popovers
    return tippy (elements, globalConfiguration);
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.popover = _init_popover;

export default (() => {
    return _init_popover();
});
