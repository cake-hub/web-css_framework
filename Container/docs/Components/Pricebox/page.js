import React from "react";
import Pricebox from "@Develop/Components/Pricebox/pricebox.html";
import ProductTile from "@Develop/Components/Product tile/productTile.html";

const PriceboxStandard = () => (
    <Pricebox c_asterisk="*" c_currency="CHF" c_prefix="from" c_basicQuantity="88kg = -.88 CHF">
        9.999,99
    </Pricebox>
);

const PriceboxMinimum = () => (
    <Pricebox>
        59,59
    </Pricebox>
);

const PriceboxPrefix = () => (
    <Pricebox c_prefix="prefix">
        24,56
    </Pricebox>
);

const PriceboxAsterisk = () => (
    <Pricebox c_asterisk="*">
        59,59
    </Pricebox>
);

const PriceboxCurrency = () => (
    <Pricebox c_currency="CHF">
        59,59
    </Pricebox>
);

const PriceboxBasicQuantity = () => (
    <Pricebox c_basicQuantity="je 240/300/320g/200ml-Tube. 100g = -,93 Fliesenkleber / 1,25 Montagekleber">
        59,59
    </Pricebox>
);

const PriceboxCustom = () => (
    <Pricebox c_basicQuantity="1kg = £ 5,99" c_prefix="from" c_asterisk="*, 1" c_currency="incl. Mwst">
        £ 59,59
    </Pricebox>
);

const PriceboxHightlightAction = () => (
    <Pricebox className="pricebox-with-highlight-action" c_currency="€" c_prefix="ab" c_basicQuantity="1kg = 1.10 €" c_highlight="Action">
        9.999,99
    </Pricebox>
);

const PriceboxHightlightOffer = () => (
    <Pricebox className="pricebox-with-highlight-offer" c_currency="€" c_prefix="ab" c_basicQuantity="1kg = 1.10 €" c_highlight="Offer">
        9.999,99
    </Pricebox>
);

const PriceboxHightlightInfo = () => (
    <Pricebox className="pricebox-with-highlight-info" c_currency="€" c_prefix="ab" c_basicQuantity="1kg = 1.10 €" c_highlight="Info">
        9.999,99
    </Pricebox>
);

const PriceboxDiscount = () => (
    <Pricebox c_asterisk="*" c_currency="CHF" c_prefix="from" c_discount="UVP:" c_recommendedRetailPrice="10.90" c_recommendedRetailPriceText="old price">
        9.999,99
    </Pricebox>
);

const PriceboxNegative = () => (
    <Pricebox className="pricebox-negative" c_asterisk="*" c_currency="CHF" c_prefix="from" c_discount="UVP:" c_recommendedRetailPrice="9.999,99" c_recommendedRetailPriceText="old price">
        9.998,50
    </Pricebox>
);

const PriceboxProductRow = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="row">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile>
                    <div className="text-right">
                        <Pricebox c_asterisk="*" c_currency="CHF" c_prefix="from" c_basicQuantity="88kg = -.88 CHF">
                            9.999,99
                        </Pricebox>
                    </div>
                </ProductTile>
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile>
                    <div className="text-right">
                        <Pricebox c_asterisk="*" c_basicQuantity="je 240/300/320g/200ml-Tube. 100g = -,93 Fliesenkleber / 1,25 Montagekleber">
                            145,27
                        </Pricebox>
                    </div>
                </ProductTile>
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile>
                    <div className="text-right">
                        <Pricebox c_currency="€" c_prefix="ab" c_basicQuantity="je 240/300/320g/200ml-Tube. 100g = -,93 Fliesenkleber / 1,25 Montagekleber">
                            145,27
                        </Pricebox>
                    </div>
                </ProductTile>
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <ProductTile>
                    <div className="text-right">
                        <Pricebox>
                            $59.59
                        </Pricebox>
                    </div>
                </ProductTile>
            </div>
        </div>
    </div>
);

const PriceboxStandardMedium = () => (
    <Pricebox className="pricebox-medium" c_asterisk="*" c_currency="CHF" c_prefix="from" c_basicQuantity="88kg = -.88 CHF">
        9.999,99
    </Pricebox>
);

const PriceboxMaximalism = () => (
    <Pricebox className="pricebox-negative pricebox-medium pricebox-with-highlight-offer" c_asterisk="*" c_currency="CHF" c_prefix="from" c_basicQuantity="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." c_highlight="Lorem ipsum dolor sit amet, consectetur adipisicing elit" c_discount="UVP:" c_recommendedRetailPrice="9.999,99" c_recommendedRetailPriceText="original price">
        9.998,50
    </Pricebox>
);

export default {
    PriceboxStandard,
    PriceboxProductRow,
    PriceboxMinimum,
    PriceboxPrefix,
    PriceboxAsterisk,
    PriceboxCurrency,
    PriceboxBasicQuantity,
    PriceboxHightlightAction,
    PriceboxHightlightOffer,
    PriceboxHightlightInfo,
    PriceboxDiscount,
    PriceboxNegative,
    PriceboxCustom,
    PriceboxStandardMedium,
    PriceboxMaximalism,
};
