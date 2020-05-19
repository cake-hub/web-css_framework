import React from "react";

const FooterListItem = ( { children,
                                 className="",
                                 c_href="#",
                                ...props } ) => (
            <li className={"footer-list-item " + className } { ...props }>
                <a className="footer-list-item-link" href={c_href}>{children}</a>
            </li>
);

export default FooterListItem;
