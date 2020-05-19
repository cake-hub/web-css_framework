import React from "react";
import Button from "@Develop/Components/Button/button.html";
import Icon from "@Develop/Components/Icon/icon.html";

const ButtonPositive = () => (
    <React.Fragment>
        <Button className="btn-primary">
            Primary
        </Button>
        &nbsp;
        <Button className="btn-primary" disabled>
            Primary disabled
        </Button>
        &nbsp;
        <Button className="btn-secondary">
            Secondary
        </Button>
        &nbsp;
        <Button className="btn-secondary" disabled>
            Secondary disabled
        </Button>
    </React.Fragment>
);

const ButtonNegative = {
    template: () => (
        <React.Fragment>
            <Button className="btn-primary-negative">
                Primary
            </Button>
            &nbsp;
            <Button className="btn-primary-negative" disabled>
                Primary disabled
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative">
                Secondary
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative" disabled>
                Secondary disabled
            </Button>
        </React.Fragment>
    ),
    name: "ButtonNegative",
    c_previewClassName: "cake-example-negative",
};

const ButtonWithIcon = () => (
    <React.Fragment>
        <Button className="btn-primary">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
            Primary
        </Button>
        &nbsp;
        <Button className="btn-primary" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
            Primary disabled
        </Button>
        &nbsp;
        <Button className="btn-secondary">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
            Secondary
        </Button>
        &nbsp;
        <Button className="btn-secondary" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
            Secondary disabled
        </Button>
    </React.Fragment>
);

const ButtonWithIconPositive = () => (
    <React.Fragment>
        <Button className="btn-primary">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
        </Button>
        &nbsp;
        <Button className="btn-primary" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
        </Button>
        &nbsp;
        <Button className="btn-secondary">
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
        </Button>
        &nbsp;
        <Button className="btn-secondary" disabled>
            <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
        </Button>
    </React.Fragment>
);

const ButtonWithIconAndTextNegative = {
    template: () => (
        <React.Fragment>
            <Button className="btn-primary-negative">
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
                Primary
            </Button>
            &nbsp;
            <Button className="btn-primary-negative" disabled>
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
                Primary disabled
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative">
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
                Secondary
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative" disabled>
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24 mr-1" />
                Secondary disabled
            </Button>
        </React.Fragment>
    ),
    name: "ButtonWithIconAndTextNegative",
    c_previewClassName: "cake-example-negative",
};

const ButtonWithIconNegative = {
    template: () => (
        <React.Fragment>
            <Button className="btn-primary-negative">
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
            </Button>
            &nbsp;
            <Button className="btn-primary-negative" disabled>
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative">
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
            </Button>
            &nbsp;
            <Button className="btn-secondary-negative" disabled>
                <Icon name="placeholder" placeholder="Placeholder" className="btn-icon icon-24" />
            </Button>
        </React.Fragment>
    ),
    name: "ButtonWithIconNegative",
    c_previewClassName: "cake-example-negative",
};

export default {
    ButtonPositive,
    ButtonNegative,
    ButtonWithIcon,
    ButtonWithIconPositive,
    ButtonWithIconAndTextNegative,
    ButtonWithIconNegative
};
