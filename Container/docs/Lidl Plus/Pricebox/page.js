import React from "react";
import Pricebox from "@Develop/Components/Pricebox/pricebox.html";
import ProductTile from "@Develop/Components/Product tile/productTile.html";
import Ribbon from "@Develop/Components/Ribbon/ribbon.html";
import RibbonItem from "@Develop/Components/Ribbon/ribbonItem.html";

const PriceboxLidlPlusDiscount = () => (
    <Pricebox className="pricebox-lidl-plus" c_asterisk="**" c_currency="EUR" c_recommendedRetailPrice="X.XX*" c_recommendedRetailPriceText="old price" c_highlight="-XX%">
        -.XX
    </Pricebox>
);

const PriceboxLidlPlusDiscountBasicQuantity = () => (
    <Pricebox className="pricebox-lidl-plus" c_asterisk="**" c_currency="EUR" c_recommendedRetailPrice="XX.XX*" c_recommendedRetailPriceText="old price" c_basicQuantity="je X,XXl, 1l = XX.XX €" c_highlight="Mit Coupon: -XX%">
        XX.XX
    </Pricebox>
);

const PriceboxRibbonCombined = () => (
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
            <PriceboxLidlPlusDiscountBasicQuantity />
        </div>
    </ProductTile>
);

export default {
    PriceboxLidlPlusDiscount,
    PriceboxLidlPlusDiscountBasicQuantity,
    PriceboxRibbonCombined,
};
