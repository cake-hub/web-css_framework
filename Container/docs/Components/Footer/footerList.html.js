import React from "react";

const FooterList = ( { children,
                                 className="",
                                ...props } ) => (
            <ul className={"footer-list " + className} { ...props }>
                {children}
            </ul>
);

export default FooterList;
