import React from "react";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const Banner = ({
    className="",
    c_subhead="",
    c_title="",
    ...props
}) => (
    <article className={"card banner-card " + className} {...props}>
        <CakeExampleImage callFilePath={__dirname} className="card-img banner-card-img" alt="Banner image" />
        { c_subhead || c_title ? (
            <header className="banner-container container-responsive">
                <div className="card-img-overlay banner-card-img-overlay">
                    {c_title ? (<h2 className="banner-card-title">{ c_title }</h2>) : null }
                    {c_subhead ? (<h3 className="banner-card-subhead">{ c_subhead }</h3>) : null }
                </div>
            </header>
        ) : null }
    </article>
);

export default Banner;
