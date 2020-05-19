import React from "react";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const BorderAdditive = {
    template: () => (
        <React.Fragment>
            <span className="border"></span>
            <span className="border-top"></span>
            <span className="border-right"></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span>
        </React.Fragment>
    ),
    name: "BorderAdditive",
    c_previewClassName: "cake-example-border-utils",
};

const BorderSubtractive = {
    template: () => (
        <React.Fragment>
            <span className="border-0"></span>
            <span className="border-top-0"></span>
            <span className="border-right-0"></span>
            <span className="border-bottom-0"></span>
            <span className="border-left-0"></span>
        </React.Fragment>
    ),
    name: "BorderSubtractive",
    c_previewClassName: "cake-example-border-utils cake-example-border-utils-0",
};


const BorderColor = {
    template: () => (
        <React.Fragment>
            <span className="border border-primary"></span>
            <span className="border border-info"></span>
            <span className="border border-danger"></span>
            <span className="border border-success"></span>
            <span className="border border-warning"></span>
            <span className="border border-gray"></span>
            <span className="border border-black"></span>
            <span className="border border-white"></span>
        </React.Fragment>
    ),
    name: "BorderColor",
    c_previewClassName: "cake-example-border-utils",
};

const BorderRadius = {
    template: () => (
        <React.Fragment>
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-top" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-right" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-bottom" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-left" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-circle" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-pill" />
            <CakeExampleImage callFilePath={__dirname} width="75px" height="75px" alt="placeholder" className="rounded-0" />
        </React.Fragment>
    ),
    name: "BorderRadius",
    c_previewClassName: "cake-example-images",
};

const BorderRadiusSize = {
    template: () => (
        <React.Fragment>
            <CakeExampleImage callFilePath={__dirname} width="75" height="75" alt="Example small rounded image" className="rounded-sm" />
            <CakeExampleImage callFilePath={__dirname} width="75" height="75" alt="Example large rounded image" className="rounded-lg" />
        </React.Fragment>
    ),
    name: "BorderRadiusSize",
    c_previewClassName: "cake-example-images",
};

export default {
    BorderAdditive,
    BorderSubtractive,
    BorderColor,
    BorderRadius,
    BorderRadiusSize,
};
