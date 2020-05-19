import React from "react";
import Button from "@Develop/Components/Button/button.html";

const CookieAlert = ( { className="",
                    children,
                    ...props} ) => (
    <div className={"cookie-alert" + (className ? " " + className : "")} {...props} data-controller="cookie-alert">
        <div className="container-responsive py-1">
            <div className="cookie-alert-content">
                {children}
            </div>
            <div className="cookie-alert-button-wrapper">
                <Button className="btn-secondary" data-controller="cookie-alert/button">Ok</Button>
            </div>
        </div>
    </div>
);

export default CookieAlert;
