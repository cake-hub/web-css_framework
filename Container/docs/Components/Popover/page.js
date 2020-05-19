import React from "react";
import { renderToString } from "react-dom/server";
import Popover from "@Develop/Components/Popover/popover.html";
import Icon from "@Develop/Components/Icon/icon.html";
import CakeExampleImage from "@Cake/build/CakeExampleImage";


const PopoverDefault = {
    template: () => (
        <React.Fragment>
            <br />
            <br />
            <br />
            <br />
            Default popover
            <abbr { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr>
        </React.Fragment>
    ),
    name: "PopoverDefault",
    c_previewClassName: "cake-example-popover",
};

const PopoverPlacement = {
    template: () => (
        <center>
            Popover &lt;Bottom&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "bottom",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;Right&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "right",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;Left&gt;
            <abbr { ...Popover ({
                placement: "left",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;Top&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "top",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr>
        </center>
    ),
    name: "PopoverPlacement",
    c_previewClassName: "cake-example-popover",
};

const PopoverPlacementExtended = {
    template: () => (
        <React.Fragment>
            Popover &lt;right-start&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "right-start",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;right&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "right",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;right-end&gt;
            <abbr { ...Popover ({
                placement: "right-end",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr>

            <br />

            Popover &lt;top-start&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "top-start",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;top&gt;
            <abbr className="mb-2" { ...Popover ({
                placement: "top",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover &lt;top-end&gt;
            <abbr { ...Popover ({
                placement: "top-end",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr>
        </React.Fragment>
    ),
    name: "PopoverPlacementExtended",
    c_previewClassName: "cake-example-popover",
};

const PopoverCustomContent = {
    template: () => (
        <React.Fragment>
            Popover with custom content
            <abbr className="mb-2" { ...Popover ({
                placement: "bottom",
                content: "<h1 class=\"mb-1\">Lorem ipsum dolor sit amet</h1>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <hr /> <a href=\"#\">Ut enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris.",
                allowhtml: true,
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />

            Popover with image
            <abbr { ...Popover ({
                placement: "bottom",
                content: renderToString (<CakeExampleImage callFilePath={__dirname} className="img-fluid" />),
                allowhtml: true,
                maxwidth: 500,
            }) }>
                <Icon title="Default popover" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </React.Fragment>
    ),
    name: "PopoverCustomContent",
    c_previewClassName: "cake-example-popover",
};

const PopoverCustomElement = {
    template: () => (
        <React.Fragment>
            <button { ...Popover ({
                placement: "bottom",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) }
            className="btn btn-secondary">
                Some button
            </button><br /><br />

            <input type="text" placeholder="Some inputfield with popover" className="form-control" { ...Popover ({
                placement: "top",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            }) } />
        </React.Fragment>
    ),
    name: "PopoverCustomElement",
    c_previewClassName: "cake-example-popover",
};

const PopoverColors = {
    template: () => (
        <React.Fragment>
            Popover with theme &lt;primary&gt;
            <abbr className="mb-2" { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                placement: "bottom",
                theme: "primary",
            }) }>
                <Icon title="Popover with theme &lt;primary&gt;" name="questionmark-circle" className="icon-24 text-primary" />
            </abbr><br />
            Popover with theme &lt;info&gt;
            <abbr className="mb-2" { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                placement: "bottom",
                theme: "info",
            }) }>
                <Icon title="Popover with theme &lt;info&gt;" name="questionmark-circle" className="icon-24 text-info" />
            </abbr><br />
            Popover with theme &lt;danger&gt;
            <abbr className="mb-2" { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                theme: "danger",
            }) }>
                <Icon title="Popover with theme &lt;danger&gt;" name="questionmark-circle" className="icon-24 text-danger" />
            </abbr><br />
            Popover with theme &lt;success&gt;
            <abbr className="mb-2" { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                theme: "success",
            }) }>
                <Icon title="Popover with theme &lt;success&gt;" name="questionmark-circle" className="icon-24 text-success" />
            </abbr><br />
            Popover with theme &lt;warning&gt;
            <abbr className="mb-2" { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                theme: "warning",
            }) }>
                <Icon title="Popover with theme &lt;warning&gt;" name="questionmark-circle" className="icon-24 text-warning" />
            </abbr><br />
            Popover with theme &lt;gray&gt;
            <abbr { ...Popover ({
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                theme: "gray",
            }) }>
                <Icon title="Popover with theme &lt;gray&gt;" name="questionmark-circle" className="icon-24 text-gray" />
            </abbr>
        </React.Fragment>
    ),
    name: "PopoverColors",
    c_previewClassName: "cake-example-popover",
};

export default {
    PopoverDefault,
    PopoverPlacement,
    PopoverPlacementExtended,
    PopoverCustomContent,
    PopoverCustomElement,
    PopoverColors,
};