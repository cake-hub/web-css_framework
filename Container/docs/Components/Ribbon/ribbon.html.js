import React from "react";

const Ribbon = ( { className="",
                    children,
                    ...props} ) => (
    <ul className={"ribbon " + className} {...props}>
        {children}
    </ul>
);

export default Ribbon;
