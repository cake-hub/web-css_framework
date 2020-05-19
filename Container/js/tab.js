import "./cakeDOM";

const _init_tab = () => {
    document.addEventListener ('DOMContentLoaded', () => {
        //Get all Tabs
        const tabs = document.querySelectorAll ('[data-controller="tab"]');

        tabs.forEach ((tab, idx) => {
            //Get all Tab-Buttons of the Tab
            const tabButtons = tab.querySelectorAll('[data-controller="tab/button"]');
            let activeTabIndex = 0;
            for (let index in tabButtons) {
                if (tabButtons [index].classList.contains('active')) {
                    activeTabIndex = parseInt (index);
                    break;
                }
            }

            //Add the Tab Methods
            tab.goToTab = (index) => {
                const tabButton = tabButtons [index];
                if (tabButton) {
                    tabButton.click ();
                    return true;
                }
                return false;
            }

            tab.nextTab = () => {
                return tab.goToTab (activeTabIndex + 1);
            }

            tab.previousTab = () => {
                return tab.goToTab (activeTabIndex - 1);
            }

            tabButtons.forEach(function(tabButton, idx) {
                tabButton.addEventListener("click", (event) => {
                    event.preventDefault();
                    if(!tabButton.classList.contains("active")) {
                        const oldActiveIndex = parseInt (activeTabIndex);
                        const parent = tabButton.parentNode;
                        const prevSibling = tabButton.previousElementSibling;
                        const nextSibling = tabButton.nextElementSibling;

                        parent.querySelectorAll('.previous').forEach(function(newTab, newI) {
                            newTab.classList.remove("previous");
                        });
                        parent.querySelectorAll('.next').forEach(function(newTab, newI) {
                            newTab.classList.remove("next");
                        });
                        parent.querySelectorAll('.active').forEach(function(newTab, newI) {
                            newTab.classList.remove("active");
                        });

                        tabButton.classList.add("active");
                        tabButton.setAttribute('aria-selected', true);
                        tabButtons [oldActiveIndex].setAttribute('aria-selected', false);
                        activeTabIndex = parseInt (idx);

                        if(prevSibling) {
                            prevSibling.classList.add("previous");
                        }
                        if(nextSibling) {
                            nextSibling.classList.add("next");
                        }

                        //Fire the event, that the tab has changed
                        tab.dispatchEvent (new CustomEvent ('tabChanged', {
                            detail: {
                                tabElement: tab,
                                elementsCount: tabButtons.length,
                                oldIndex: oldActiveIndex,
                                oldElement: tabButtons [oldActiveIndex],
                                activeIndex: activeTabIndex,
                                activeElement: tabButton,
                            }
                        }));
                    }
                    return false;
                });
            });
        });
    });
};

if (typeof window.cake !== "object") {
    window.cake = {};
}
window.cake.tab = _init_tab;

export default _init_tab;
