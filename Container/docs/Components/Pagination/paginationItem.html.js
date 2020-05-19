import React from "react";

export const PaginationItem = ( { className="",
                        children,
                        href="#",
                        c_tag="li",
                        ...props } ) => (
    <li className={ "page-item " + className } >
        <a className="page-link" href={href} {...props}>
                {children}
        </a>
    </li>
);

export const PaginationItemNotLinked = ( { className="",
                        children,
                        c_tag="li",
                        ...props } ) => (
    <li className={ "page-item " + className } {...props}>
        <span className="page-link">
                {children}
        </span>
    </li>
);
