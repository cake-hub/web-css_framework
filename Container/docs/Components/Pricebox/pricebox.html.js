import React from "react";

const Pricebox = ( { children,
                    className="",
                    c_prefix="",
                    c_asterisk="",
                    c_currency="",
                    c_basicQuantity="",
                    c_highlight="",
                    c_discount="",
                    c_recommendedRetailPrice="",
                    c_recommendedRetailPriceText="",
                    ...props } ) => (
    <div className={"pricebox" + (className ? " " + className : "")} {...props}>
        <div className="pricebox-wrapper">
            { c_highlight ? (
                <div className="pricebox-highlight" >{ c_highlight }</div>
            ) : null }
            <div className="pricebox-container">
                { c_discount || c_recommendedRetailPrice ?
                <div className="pricebox-discount-wrapper">
                    { c_discount ? <span className="pricebox-discount">{ c_discount }</span> : ''}{' '}
                    { c_recommendedRetailPrice ? <span className="pricebox-recommended-retail-price"><span className="sr-only">{ c_recommendedRetailPriceText }</span>{ c_recommendedRetailPrice }</span> : ''}
                </div>
                : ''}

                <div className="pricebox-price-wrapper" aria-label={(c_prefix ? c_prefix + ' ': '') + children + (c_currency ? ' ' + c_currency: '') + (c_asterisk ? ' ' + c_asterisk: '')}>
                    { c_prefix ? <span className="pricebox-prefix">{ c_prefix }</span> : ''}
                    <span className="pricebox-price">{ children }</span>

                    { c_asterisk || c_currency ?
                        <div className="pricebox-suffix">
                            { c_asterisk ? <span className="pricebox-asterisk">{ c_asterisk }</span> : ''}
                            { c_currency ? <span className="pricebox-currency">{ c_currency }</span> : ''}
                        </div>
                    : ''}
                </div>
            </div>
        </div>
        { c_basicQuantity ?
            <div className="pricebox-basic-quantity">
                {c_basicQuantity}
            </div>
        : ''}
    </div>
);

export default Pricebox;
