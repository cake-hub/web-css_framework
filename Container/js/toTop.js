import "./cakeDOM";

const _init_totop = (offset = 20, enableSmoothScrolling = true) => {
    document.addEventListener ('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll("[data-controller='totop']");

        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons [i].classList.contains ("show")) continue;
                        toggleDisplay (buttons [i], false);
                        buttons[i].classList.add("show");
                }
            } else {
                for (let i = 0; i < buttons.length; i++) {
                    if (!buttons [i].classList.contains ("show")) continue;
                        buttons[i].classList.remove("show");
                        toggleDisplay (buttons [i], true);
                }
            }
        });

        let timeout;
        function toggleDisplay (button, show) {
            clearTimeout (timeout);
            if (!show) {
                button.classList.remove("invisible");
                return;
            }
            const delay = window.getComputedStyle(button).getPropertyValue('transition-duration') || 0;
            timeout = setTimeout(
                () => {
                    button.classList.add("invisible");
                },
                parseFloat (delay) * 1000
            );
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", ( ev ) => {
                ev.preventDefault();
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            });
        }

        //Add smooth scroll behavior to html-element
        if (enableSmoothScrolling) {
            document.addEventListener ('DOMContentLoaded', () => {
                document.documentElement.style.scrollBehavior = "smooth";
            });
        }
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.toTop = _init_totop;

export default _init_totop;
