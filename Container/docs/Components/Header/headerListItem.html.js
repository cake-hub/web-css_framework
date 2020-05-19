import React from "react";

const HeaderListItem = (  { children,
                    className="",
                    c_itemClassName="",
                    c_ariaLabel="",
                    ...props }  ) => (
    <li className={"header-list-item " + c_itemClassName} {...props}>
        <a href="#" className={"header-list-item-link " + className} aria-label={c_ariaLabel}>
            { children }
        </a>
    </li>

);

export default HeaderListItem;
