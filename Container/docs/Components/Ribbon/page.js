import React from "react";
import ProductTile from "@Develop/Components/Product tile/productTile.html";
import {Teaser} from "@Develop/Components/Teaser/teaser.html";
import Ribbon from "@Develop/Components/Ribbon/ribbon.html";
import RibbonItem from "@Develop/Components/Ribbon/ribbonItem.html";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const RibbonColors = {
    template: () => (
        <Ribbon>
            <RibbonItem className="ribbon-item-primary">Primary</RibbonItem>
            <RibbonItem className="ribbon-item-info">Info</RibbonItem>
            <RibbonItem className="ribbon-item-danger">Highlight</RibbonItem>
            <RibbonItem className="ribbon-item-gray">Gray</RibbonItem>
        </Ribbon>
    ),
    name: "RibbonColors",
    c_previewClassName: "cake-example-ribbon",
};

const RibbonMultiple = {
    template: () => (
        <Ribbon>
            <RibbonItem className="ribbon-item-primary">First #1</RibbonItem>
            <RibbonItem className="ribbon-item-primary">Second #2</RibbonItem>
            <RibbonItem className="ribbon-item-primary">Thrid #3</RibbonItem>
            <RibbonItem className="ribbon-item-danger">Fourth #4</RibbonItem>
        </Ribbon>
    ),
    name: "RibbonMultiple",
    c_previewClassName: "cake-example-ribbon",
};

const RibbonImage = {
    template: () => (
        <Ribbon>
            <RibbonItem className="ribbon-item-primary"><CakeExampleImage callFilePath={__dirname} className="img-fluid" width="80px" height="60px" title="placeholder" /></RibbonItem>
            <RibbonItem className="ribbon-item-primary"><CakeExampleImage callFilePath={__dirname} className="img-fluid" title="placeholder" width="160px" height="120px" /></RibbonItem>
        </Ribbon>
    ),
    name: "RibbonImage",
    c_previewClassName: "cake-example-ribbon",
};

const RibbonExample = () => (
    <div className="row">
        <div className="col col-12 col-sm-6 p-1">
            <ProductTile style={{maxWidth: "18rem"}} c_addon={(
                <Ribbon>
                    <RibbonItem className="ribbon-item-primary">First #1</RibbonItem>
                    <RibbonItem className="ribbon-item-primary">Second #2</RibbonItem>
                    <RibbonItem className="ribbon-item-primary">Thrid #3</RibbonItem>
                    <RibbonItem className="ribbon-item-danger">Fourth #4</RibbonItem>
                </Ribbon>
            )} />
        </div>
        <div className="col col-12 col-sm-6 p-1">
            <Teaser
                className="teaser-card-light"
                c_title="Title"
                c_subhead="Subhead"
                c_addon={(
                    <Ribbon>
                        <RibbonItem className="ribbon-item-primary">First #1</RibbonItem>
                        <RibbonItem className="ribbon-item-primary">Second #2</RibbonItem>
                        <RibbonItem className="ribbon-item-primary">Thrid #3</RibbonItem>
                        <RibbonItem className="ribbon-item-danger">Fourth #4</RibbonItem>
                    </Ribbon>
                )}
            ></Teaser>
        </div>
    </div>
);


export default {
    RibbonColors,
    RibbonMultiple,
    RibbonImage,
    RibbonExample,
};
