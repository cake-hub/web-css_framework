import React from "react";

// bugfix - oldBrowser - Safari / iOS does not support the new use of only `href` inside use tags. But `xlink:href` is officially deprecated!
// so please remove the `xlink:` prefix as soon as safari adds support for the new notation

const Icon = ( { name="placeholder", title="", className="", ...props } ) => (
    <svg className={"icon" + (className ? " " + className : "")} { ...props } xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
        <title>{ title }</title>
        <use xlinkHref={ "images/icon__sprite.svg#" + name } />
    </svg>
);

export default Icon;
