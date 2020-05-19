import React from "react";
import { getThemes } from "../../helper";

import Icon from "@Develop/Components/Icon/icon.html";
import IconSet from "@Develop/Components/Icon/iconSet.html";

const IconDefault = () => (
    <Icon name="placeholder" title="Placeholder" />
);

const IconSizing8 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-8" />
);

const IconSizing16 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-16" />
);

const IconSizing24 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-24" />
);

const IconSizing32 = () => (
    <Icon name="placeholder" title="Placeholder" className="icon-32" />
);

const IconArrowDownExample = () => (
    <Icon className="icon-32" name="arrow-down" title="Arrow down" />
);

const IconButtonExample = () => (
    <button className="btn btn-primary">
        <Icon className="icon-24 btn-icon" name="placeholder" title="Placeholder" />&emsp;Some text
    </button>
);

const IconVerticalMiddleExample = () => (
    <React.Fragment>
        <Icon className="icon-24 icon-vertical-middle" name="placeholder" title="Placeholder" />&emsp;Some text
    </React.Fragment>
);

const IconColoringExample = () => (
    <React.Fragment>
        <Icon className="icon-32" style={{ color: "red" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-32" style={{ color: "#0050AA" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-32" style={{ color: "rgba(190, 89, 29, 1)" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-32" style={{ color: "hsla(357, 92%, 47%, 1)" }} name="placeholder" title="Placeholder" />
        <Icon className="icon-32 text-primary" name="placeholder" title="Placeholder" />
    </React.Fragment>
);

const IconSetAsTables = () => (
    <React.Fragment>
        { getThemes ().map (theme => (
            <div key={theme} className={"only-theme is-theme-" + theme}>
                <IconSet theme={theme} />
            </div>
        )) }
    </React.Fragment>
);

export default {
    Icon,
    IconDefault,
    IconSizing8,
    IconSizing16,
    IconSizing24,
    IconSizing32,
    IconArrowDownExample,
    IconButtonExample,
    IconVerticalMiddleExample,
    IconColoringExample,
    IconSetAsTables,
};
