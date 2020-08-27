import React from "react";
import Ribbon from "@Develop/Components/Ribbon/ribbon.html";
import RibbonItem from "@Develop/Components/Ribbon/ribbonItem.html";
import CouponExamples from "@Develop/Lidl Plus/Coupon/page";
import PriceboxExamples from "@Develop/Lidl Plus/Pricebox/page";

const RibbonLidlPlus = () => (
    <div className="cake-example-ribbon" id="showBox">
        <Ribbon>
            <RibbonItem className="ribbon-item-lidl-plus">
                <img src="images/logo_lidl-plus.svg" alt="Lidl Plus Logo" />
            </RibbonItem>
        </Ribbon>
    </div>
);

const RipponCombined = () => (
    <div className="row">
        <div className="col col-12 col-sm-6 p-1">
            <CouponExamples.CouponRibbonCombined />
        </div>
        <div className="col col-12 col-sm-6 p-1">
            <PriceboxExamples.PriceboxRibbonCombined />
        </div>
    </div>
);

export default {
    RibbonLidlPlus,
    RipponCombined,
};
