import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

export const TrustbarItem = ( { className="",
                        children,
                        c_icon="placeholder",
                        ...props } ) => (
    <li className={ "trustbar-item " + className } {...props}>
        <a href="#" className="trustbar-item-link">
            <Icon name={c_icon} title="Placeholder" className="icon icon-24 icon-vertical-middle trustbar-item-icon" />
            {children}
        </a>
    </li>
);

export const TrustbarItemNotLinked = ( { className="",
                        children,
                        c_icon="placeholder",
                        ...props } ) => (
    <li className={ "trustbar-item " + className } {...props}>
        <span href="#" className="trustbar-item-link">
            <Icon name={c_icon} title="Placeholder" className="icon icon-24 icon-vertical-middle trustbar-item-icon" />
            {children}
        </span>
    </li>
);
