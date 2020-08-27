import React from "react";
import Coupon from "@Develop/Lidl Plus/Coupon/coupon.html";
import ProductTile from "@Develop/Components/Product tile/productTile.html";
import Ribbon from "@Develop/Components/Ribbon/ribbon.html";
import RibbonItem from "@Develop/Components/Ribbon/ribbonItem.html";

const CouponExample = () => (
    <Coupon c_text="Coupon text">99%</Coupon>
);

const CouponRibbonCombined = () => (
    <ProductTile style={{maxWidth: "18rem"}} c_addon={(
        <React.Fragment>
            <Ribbon>
                <RibbonItem className="ribbon-item-lidl-plus">
                    <img src="images/logo_lidl-plus.svg" alt="Lidl Plus Logo" />
                </RibbonItem>
            </Ribbon>
        </React.Fragment>
    )}
    c_productTitle="Cake"
    c_productDescription="Very delicious and sweet piece of love.">
        <div className="text-right">
            <Coupon c_text="only this week">100%</Coupon>
        </div>
    </ProductTile>
);

export default {
    CouponExample,
    CouponRibbonCombined
};