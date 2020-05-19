import React from "react";

const RibbonItem = ( { className="",
                    children,
                    ...props} ) => (
    <li className={"ribbon-item " + className} {...props}>
        {children}
    </li>
);

export default RibbonItem;
