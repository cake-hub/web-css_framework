import "./cakeDOM";

const _init_cookieAlert = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const cookieAlert = document.querySelector('*[data-controller="cookie-alert"]');
        const cookieAlertButton = document.querySelector('*[data-controller="cookie-alert/button"]');

        if (cookieAlert && cookieAlertButton) {
            cookieAlertButton.addEventListener('click', (event) => {
                cookieAlert.classList.add("cookie-alert-hide");
            });

            //Fire event, that the cookie alert button was clicked
            cookieAlert.dispatchEvent(new CustomEvent ('cookieAlertClicked', {
                detail: {
                    cookieAlertElement: cookieAlert,
                    cookieAlertButtonElement: cookieAlertButton,
                }
            }));
        }
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.cookieAlert = _init_cookieAlert;

export default (() => {
    _init_cookieAlert();
});
