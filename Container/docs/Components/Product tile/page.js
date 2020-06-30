import React from "react";
import ProductTile from "@Develop/Components/Product tile/productTile.html";

const ProductTileDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <ProductTile style={{maxWidth: "304px"}} />
    </div>
);

const ProductGridDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="row">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile c_productTitle="A long product tile headline that has more content that just one line." c_productDescription="This is a example for more then one line copy text. It shows the equal height of the product tiles in the same row."/>
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile />
            </div>
        </div>
    </div>
);

export default {
    ProductTileDefault,
    ProductGridDefault
};
