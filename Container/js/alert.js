import "./cakeDOM";

const _init_alert = () => {
    document.addEventListener ('DOMContentLoaded', () => {
        //Get All Accordion-Inputs and set Event-Listener (change)
        let alertCloseButtons = document.querySelectorAll ('button[data-dismiss=alert]');

        //Create the Events needed
        let alertCloseEvent = new CustomEvent('alertClose');
        let alertClosedEvent = new CustomEvent('alertClosed');


        alertCloseButtons.forEach (alertCloseButton => {
            //Get parent element (alert-element)
            let alertElement = alertCloseButton.closest ('.alert');

            //Show the alertCloseButton
            alertCloseButton.style.display = 'block';

            let removeElementFromDom = () => {
                alertElement.dispatchEvent(alertClosedEvent);
                alertElement.parentNode.removeChild(alertElement);
            };

            //Add click-listener to hide element on click
            alertCloseButton.addEventListener ('click', (e) => {
                alertElement.dispatchEvent(alertCloseEvent);
                alertElement.classList.remove ('show');
                alertElement.classList.add ('hide');

                //Remove element directly from dom, when no fade class applied to it
                if (!alertElement.classList.contains ('fade')) {
                    removeElementFromDom ();
                }
            });

            //Remove element from Dom, after transition ended
            alertElement.addEventListener("transitionend", (e) => {
                removeElementFromDom ();
            }, false);

            //Add Method to programmatically close an alert
            alertElement.closeAlert = () => {
                alertCloseButton.click ();
            }
        });
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.alert = _init_alert;

export default (() => {
    _init_alert ();
});
