import React from "react";
import Tab from "@Develop/Components/Tab/tab.html";

const TabDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showBox">
        <Tab>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn previous" aria-selected="false">First Tab</button>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn active" aria-selected="true">Second Tab</button>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn next" aria-selected="false">Third Tab</button>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn" aria-selected="false">Fourth Tab</button>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn" aria-selected="false">Fifth Tab</button>
            <button role="tab" type="button" data-controller="tab/button" className="btn tab-btn" aria-selected="false">Sixth Tab</button>
        </Tab>
    </div>
);

const TabWithExampleJavascriptFunctionality = () => (
    <div className="cake-example-tab-content" id="showBox">
        <Tab id="tab-selector">
            <button role="tab" type="button" id="tab-button-1" data-controller="tab/button" className="btn tab-btn previous" aria-selected="false" aria-controls="tab-content-1">First Tab</button>
            <button role="tab" type="button" id="tab-button-2" data-controller="tab/button" className="btn tab-btn active" aria-selected="true" aria-controls="tab-content-2">Second Tab</button>
            <button role="tab" type="button" id="tab-button-3" data-controller="tab/button" className="btn tab-btn next" aria-selected="false" aria-controls="tab-content-3">Third Tab</button>
            <button role="tab" type="button" id="tab-button-4" data-controller="tab/button" className="btn tab-btn" aria-selected="false" aria-controls="tab-content-4">Fourth Tab</button>
            <button role="tab" type="button" id="tab-button-5" data-controller="tab/button" className="btn tab-btn" aria-selected="false" aria-controls="tab-content-5">Fifth Tab</button>
            <button role="tab" type="button" id="tab-button-6" data-controller="tab/button" className="btn tab-btn" aria-selected="false" aria-controls="tab-content-6">Sixth Tab</button>
        </Tab>
        <div role="tabpanel" id="tab-content-1" aria-labelledby="tab-button-1" aria-hidden="true" className="tab-content hidden">
            Content for tab one.
        </div>
        <div role="tabpanel" id="tab-content-2" aria-labelledby="tab-button-2" aria-hidden="false" className="tab-content">
            Content for tab two.
        </div>
        <div role="tabpanel" id="tab-content-3" aria-labelledby="tab-button-3" aria-hidden="true" className="tab-content hidden">
            Content for tab three.
        </div>
        <div role="tabpanel" id="tab-content-4" aria-labelledby="tab-button-4" aria-hidden="true" className="tab-content hidden">
            Content for tab four.
        </div>
        <div role="tabpanel" id="tab-content-5" aria-labelledby="tab-button-5" aria-hidden="true" className="tab-content hidden">
            Content for tab five.
        </div>
        <div role="tabpanel" id="tab-content-6" aria-labelledby="tab-button-6" aria-hidden="true" className="tab-content hidden">
            Content for tab six.
        </div>

        <script dangerouslySetInnerHTML={{__html: `
            var tab = document.getElementById ('tab-selector');

            tab.addEventListener ('tabChanged', function (e) {
                //Get the content elements
                var oldContentElement = document.getElementById (e.detail.oldElement.getAttribute('aria-controls'));
                var activeContentElement = document.getElementById (e.detail.activeElement.getAttribute('aria-controls'));

                //Update aria-attributes of content elements
                oldContentElement.setAttribute ('aria-hidden', true);
                activeContentElement.setAttribute ('aria-hidden', false);

                //Adjust display of content elements
                oldContentElement.classList.add ("hidden");
                activeContentElement.classList.remove ("hidden");
            });

            var direction = "forward";
            setInterval (function () {
                if (direction === "forward") {
                    if (!tab.nextTab ()) {
                        tab.previousTab ();
                        direction = "backward";
                    }
                } else {
                    if (!tab.previousTab ()) {
                        tab.nextTab ();
                        direction = "forward";
                    }
                }
            }, 5000);
        `}}></script>
    </div>
);

export default {
    TabDefault,
    TabWithExampleJavascriptFunctionality,
};
