import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

export const Alert = ( { children, className="", ...props } ) => (
    <div className={"alert " + className} role="alert" {...props}>
        {children}
    </div>
);

export const AlertIconAside = ( { children, className="", iconName="", iconTitle="", alertHeadline="", ...props } ) => (
    <Alert className={"d-flex " + className} {...props}>
        <div className="alert-icon">
            <Icon name={iconName} title={iconTitle} className="icon-32" />
        </div>
        <div className="alert-content-with-icon">
            <h4 className="alert-heading">{alertHeadline}</h4>
            <p className="mb-0">{children}</p>
        </div>
    </Alert>
);
