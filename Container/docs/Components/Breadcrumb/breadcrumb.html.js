import React from "react";
import Icon from "@Develop/Components/Icon/icon.html";

const Breadcrumb = (  { children, className="", ...props }  ) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#"><Icon name="house" title="Home" /></a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
);

export default Breadcrumb;
