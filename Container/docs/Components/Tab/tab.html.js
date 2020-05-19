import React from "react";

const Tab = ( { children,
                className="",
                ...props } ) => (
    <div className={"btn-group tab" + (className ? ' ' + className : '')} aria-label="Tab component" data-controller="tab" role="tablist" {...props}>
        { children }
    </div>
);

export default Tab;
