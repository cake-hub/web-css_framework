import React from "react";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const ProductTile = ( { className="",
                            url="#",
                            c_imgAlt="placeholder",
                            c_productTitle="Product title",
                            c_productDescription="Product description",
                            children,
                            c_addon,
                            ...props } ) => (
    <a href={ url } className={"card product-tile-card " + className} {...props}>
        <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt={ c_imgAlt } />
        {c_addon}
        <div className="card-body product-tile-card-body">
            <h3 className="card-title product-tile-card-title">{ c_productTitle }</h3>
            <p className="card-text product-tile-card-text">{ c_productDescription }</p>
            {children}
        </div>
    </a>
);

export default ProductTile;
