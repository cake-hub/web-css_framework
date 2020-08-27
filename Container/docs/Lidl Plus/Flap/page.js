import React from "react";
import Flap from "@Develop/Lidl Plus/Flap/flap.html";
import ProductTile from "@Develop/Components/Product tile/productTile.html";
import {Teaser} from "@Develop/Components/Teaser/teaser.html";

const FlapExample = () => (
    <div className="cake-example-flap" id="showBox">
        <Flap>
            Lidl Plus Coupon
        </Flap>
    </div>
);

const FlapInElements = () => (
    <div className="row">
        <div className="col col-12 col-sm-6 p-1">
            <ProductTile style={{maxWidth: "18rem"}} c_addon={(
                <Flap>
                    Lidl Plus Coupon
                </Flap>
            )} />
        </div>
        <div className="col col-12 col-sm-6 p-1">
            <Teaser
                className="teaser-card-light"
                c_title="Title"
                c_subhead="Subhead"
                c_addon={(
                    <Flap>
                        Lidl Plus<br/>Coupon
                    </Flap>
                )}
            ></Teaser>
        </div>
    </div>
);

export default {
    FlapExample,
    FlapInElements,
};
