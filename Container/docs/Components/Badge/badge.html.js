import React from "react";

const ScreenReaderTextSpan = (screenReaderText) => {
    if (!screenReaderText) {
        return null;
    }
    return (
        <span className="sr-only">{ screenReaderText }</span>
    );
};

const Badge = (  { children,
                   className="",
                   href="",
                   c_ScreenReaderText="",
                }  ) => (

    (href ?
        <a href={href} className={"badge" + (className ? " " + className : "")} >
            { children }
            { ScreenReaderTextSpan (c_ScreenReaderText) }
        </a>
    :
        <span className={"badge" + (className ? " " + className : "")} >
            { children }
            { ScreenReaderTextSpan (c_ScreenReaderText) }
        </span>
    )
);

export default Badge;
