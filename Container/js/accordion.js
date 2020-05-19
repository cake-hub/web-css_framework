import "./cakeDOM";

const _init_accordion = () => {
    document.addEventListener ('DOMContentLoaded', () => {
        //Get All Accordion-Inputs and set Event-Listener (change)
        let accordionInputElements = document.querySelectorAll ('*[data-toggle=accrodion-collapse]');
        accordionInputElements.forEach ((accordionInputElement) => {
            accordionInputElement.addEventListener ('change', () => {
                let accordionInputLabel = accordionInputElement.nextSibling;

                //Toggle aria-expanded on all other elements, when input is radio (single-variant)
                if (accordionInputElement.getAttribute ('type') === 'radio') {
                    const accordionInputLabelElement = accordionInputElement.parentElement.siblingSelector ('label[aria-expanded=true]');
                    if (accordionInputLabelElement) {
                        accordionInputLabelElement.setAttribute ('aria-expanded', false);
                    }
                }

                accordionInputLabel.setAttribute ('aria-expanded', accordionInputLabel.getAttribute ('aria-expanded') == "false" ? true : false);
            });
        })
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.accordion = _init_accordion;

export default (() => {
    _init_accordion ();
});
