import React from "react";

const FloatingActionButton = ( { children, className="", ...props } ) => (
    <button className={"btn btn-fab " + className} {...props}>
        {children}
    </button>
);

export default FloatingActionButton;
