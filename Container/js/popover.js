import "core-js/stable";
import "regenerator-runtime/runtime";
import "./cakeDOM";
import tippy from "tippy.js/dist/tippy.cjs";

const _init_popover = (elements = '*[data-tippy-content]', globalConfiguration = {
    theme: "cake",
    placement: 'top',
    popperOptions: {
        positionFixed: true,
        modifiers: [
            {
                name: 'flip',
                enabled: true,
                options: {
                    fallbackPlacements: ['bottom'],
                },
            },
        ],
    },
    interactive: true,
    delay: 200,
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
