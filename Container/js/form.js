import "./cakeDOM";

const _init_password = () => {
    document.addEventListener ('DOMContentLoaded', () => {
        const _selectors = {
            'inputfieldPassword': '[data-controller="inputfield/password"]',
            'inputfieldPasswordToggle': '[data-controller="inputfield/password/toggle"]'
        };

        const passwordFields = document.querySelectorAll(_selectors.inputfieldPassword);
        passwordFields.forEach( passwordField => {
            const passwordToggle = passwordField.siblingSelector(_selectors.inputfieldPasswordToggle);
            if(passwordToggle) {
                passwordToggle.classList.remove ('d-none');
                passwordToggle.onclick = function( ev ) {
                    ev.preventDefault();
                    if(passwordField.getAttribute('type') === 'password'){
                        passwordField.setAttribute('type', "text");
                        passwordToggle.setAttribute('aria-pressed', "true");
                    } else {
                        passwordField.setAttribute('type', "password");
                        passwordToggle.setAttribute('aria-pressed', "false");
                    }
                }
            }
        });
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.form = _init_password;

export default (() => {
    _init_password();
});
