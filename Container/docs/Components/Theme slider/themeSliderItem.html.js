import React from "react";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const ThemeSliderItem = (  { children,
                            className="",
                            c_url="#",
                            c_imgAlt="",
                            c_cardSubhead="",
                            c_cardTitle="",
                            ...props }  ) => (
    <li className={"theme-slider-slide " + className} {...props}>
        <a href={ c_url } className="card theme-slider-card">
            <CakeExampleImage callFilePath={__dirname} className="card-img-top theme-slider-card-img-top" alt={ c_imgAlt } />
            <div className="card-body theme-slider-card-body">
                <div className="card-subtitle theme-slider-card-title" title="Card subtitle">{ c_cardTitle }</div>
                <div className="card-subhead theme-slider-card-subhead">{ c_cardSubhead }</div>
            </div>
        </a>
    </li>
);

export default ThemeSliderItem;
