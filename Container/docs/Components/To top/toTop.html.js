import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const ToTop = ( { className="", ...props } ) => (
    <button className={ "btn btn-to-top " + className } {...props}>
        <Icon name="arrow-up" title="To top" className="btn-icon icon-24" />
    </button>
);

export default ToTop;
