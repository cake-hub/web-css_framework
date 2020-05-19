import React from "react";

const GridDefault = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
    ),
    name: "GridDefault",
    c_previewClassName: "cake-example-row",
};

const GridEqualWidth = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">
                    1 of 2
                </div>
                <div className="col">
                    2 of 2
                </div>
            </div>
            <div className="row">
                <div className="col">
                    1 of 3
                </div>
                <div className="col">
                    2 of 3
                </div>
                <div className="col">
                    3 of 3
                </div>
            </div>
        </div>
    ),
    name: "GridEqualWidth",
    c_previewClassName: "cake-example-row",
};

const GridEqualWidthWorkaround = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="w-100"></div>
                <div className="col">Column</div>
                <div className="col">Column</div>
            </div>
        </div>
    ),
    name: "GridEqualWidthWorkaround",
    c_previewClassName: "cake-example-row",
};

const GridOneColumnWidth = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">
                    1 of 3
                </div>
                <div className="col-6">
                    2 of 3 (wider)
                </div>
                <div className="col">
                    3 of 3
                </div>
            </div>
            <div className="row">
                <div className="col">
                    1 of 3
                </div>
                <div className="col-5">
                    2 of 3 (wider)
                </div>
                <div className="col">
                    3 of 3
                </div>
            </div>
        </div>
    ),
    name: "GridOneColumnWidth",
    c_previewClassName: "cake-example-row",
};

const GridVariableWidthContent = {
    template:() => (
        <div className="container-responsive">
            <div className="row justify-content-md-center">
                <div className="col col-lg-2">
                    1 of 3
                </div>
                <div className="col-md-auto">
                    Variable width content
                </div>
                <div className="col col-lg-2">
                    3 of 3
                </div>
            </div>
            <div className="row">
                <div className="col">
                    1 of 3
                </div>
                <div className="col-md-auto">
                    Variable width content
                </div>
                <div className="col col-lg-2">
                    3 of 3
                </div>
            </div>
        </div>
    ),
    name: "GridVariableWidthContent",
    c_previewClassName: "cake-example-row",
};

const GridEqualWidthMultiRow = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">col</div>
                <div className="col">col</div>
                <div className="w-100"></div>
                <div className="col">col</div>
                <div className="col">col</div>
            </div>
        </div>
    ),
    name: "GridEqualWidthMultiRow",
    c_previewClassName: "cake-example-row",
};

const GridAllBreakpoints = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">col</div>
                <div className="col">col</div>
                <div className="col">col</div>
                <div className="col">col</div>
            </div>
            <div className="row">
                <div className="col-8">col-8</div>
                <div className="col-4">col-4</div>
            </div>
        </div>
    ),
    name: "GridAllBreakpoints",
    c_previewClassName: "cake-example-row",
};

const GridStackedToHorizontal = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-sm-8">col-sm-8</div>
                <div className="col-sm-4">col-sm-4</div>
            </div>
            <div className="row">
                <div className="col-sm">col-sm</div>
                <div className="col-sm">col-sm</div>
                <div className="col-sm">col-sm</div>
            </div>
        </div>
    ),
    name: "GridStackedToHorizontal",
    c_previewClassName: "cake-example-row",
};

const GridMixMatch1 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-12 col-md-8">.col-12 .col-md-8</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>
        </div>
    ),
    name: "GridMixMatch1",
    c_previewClassName: "cake-example-row",
};

const GridMixMatch2 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>
        </div>
    ),
    name: "GridMixMatch2",
    c_previewClassName: "cake-example-row",
};

const GridMixMatch3 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-6">.col-6</div>
                <div className="col-6">.col-6</div>
            </div>
        </div>
    ),
    name: "GridMixMatch3",
    c_previewClassName: "cake-example-row",
};

const GridGutter = {
    template: () => (
        <div className="container px-lg-5">
            <div className="row mx-lg-n5">
                <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
            </div>
        </div>
    ),
    name: "GridGutter",
    c_previewClassName: "cake-example-row",
};

const GridVerticalAlignment1 = {
    template: () => (
        <div className="container-responsive">
            <div className="row align-items-start">
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
            <div className="row align-items-end">
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
        </div>
    ),
    name: "GridVerticalAlignment1",
    c_previewClassName: "cake-example-row cake-example-row-flex-cols",
};

const GridVerticalAlignment2 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col align-self-start">
                    One of three columns
                </div>
                <div className="col align-self-center">
                    One of three columns
                </div>
                <div className="col align-self-end">
                    One of three columns
                </div>
            </div>
        </div>
    ),
    name: "GridVerticalAlignment2",
    c_previewClassName: "cake-example-row cake-example-row-flex-cols",
};

const GridHorizontalAlignment = {
    template: () => (
        <div className="container-responsive">
            <div className="row justify-content-start">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
        </div>
    ),
    name: "GridHorizontalAlignment",
    c_previewClassName: "cake-example-row",
};

const GridNoGutter = {
    template: () => (
        <div className="row no-gutters">
            <div className="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
            <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
    ),
    name: "GridNoGutter",
    c_previewClassName: "cake-example-row",
};

const GridColumnWrapping = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-9">.col-9</div>
                <div className="col-4">.col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                <div className="col-6">.col-6<br />Subsequent columns continue along the new line.</div>
            </div>
        </div>
    ),
    name: "GridColumnWrapping",
    c_previewClassName: "cake-example-row",
};

const GridColumnBreaks1 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>

                {/* <!-- Force next columns to break to new line --> */}
                <div className="w-100"></div>

                <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
            </div>
        </div>
    ),
    name: "GridColumnBreaks1",
    c_previewClassName: "cake-example-row",
};

const GridColumnBreaks2 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>

                {/* <!-- Force next columns to break to new line at md breakpoint and up --> */}
                <div className="w-100 d-none d-md-block"></div>

                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
            </div>
        </div>
    ),
    name: "GridColumnBreaks2",
    c_previewClassName: "cake-example-row",
};

const GridOrderClasses1 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col">
                    First, but unordered
                </div>
                <div className="col order-12">
                    Second, but last
                </div>
                <div className="col order-1">
                    Third, but first
                </div>
            </div>
        </div>
    ),
    name: "GridOrderClasses1",
    c_previewClassName: "cake-example-row",
};

const GridOrderClasses2 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col order-last">
                    First, but last
                </div>
                <div className="col">
                    Second, but unordered
                </div>
                <div className="col order-first">
                    Third, but first
                </div>
            </div>
        </div>
    ),
    name: "GridOrderClasses2",
    c_previewClassName: "cake-example-row",
};

const GridOffsetClasses1 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-md-4">.col-md-4</div>
                <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
            </div>
            <div className="row">
                <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
            </div>
        </div>
    ),
    name: "GridOffsetClasses1",
    c_previewClassName: "cake-example-row",
};

const GridOffsetClasses2 = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
                <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
            </div>

            <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
                <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
            </div>
        </div>
    ),
    name: "GridOffsetClasses2",
    c_previewClassName: "cake-example-row",
};

const GridMarginUtilities = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-md-4">.col-md-4</div>
                <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
            </div>
            <div className="row">
                <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
            </div>
            <div className="row">
                <div className="col-auto mr-auto">.col-auto .mr-auto</div>
                <div className="col-auto">.col-auto</div>
            </div>
        </div>
    ),
    name: "GridMarginUtilities",
    c_previewClassName: "cake-example-row",
};

const GridNesting = {
    template: () => (
        <div className="container-responsive">
            <div className="row">
                <div className="col-sm-9">
                    Level 1: .col-sm-9
                    <div className="row">
                        <div className="col-8 col-sm-6">
                        Level 2: .col-8 .col-sm-6
                        </div>
                        <div className="col-4 col-sm-6">
                        Level 2: .col-4 .col-sm-6
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    name: "GridNesting",
    c_previewClassName: "cake-example-row",
};

const GridSassExampleUsage = {
    template: () => (
        <div className="example-container">
            <div className="example-row">
                <div className="example-content-main">Main content</div>
                <div className="example-content-secondary">Secondary content</div>
            </div>
        </div>
    ),
    name: "GridSassExampleUsage",
    c_previewClassName: "cake-example",
};

export default {
    GridDefault,
    GridEqualWidth,
    GridEqualWidthWorkaround,
    GridOneColumnWidth,
    GridVariableWidthContent,
    GridEqualWidthMultiRow,
    GridAllBreakpoints,
    GridStackedToHorizontal,
    GridMixMatch1,
    GridMixMatch2,
    GridMixMatch3,
    GridGutter,
    GridVerticalAlignment1,
    GridVerticalAlignment2,
    GridHorizontalAlignment,
    GridNoGutter,
    GridColumnWrapping,
    GridColumnBreaks1,
    GridColumnBreaks2,
    GridOrderClasses1,
    GridOrderClasses2,
    GridOffsetClasses1,
    GridOffsetClasses2,
    GridMarginUtilities,
    GridNesting,
    GridSassExampleUsage,
};
