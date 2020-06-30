import React from "react";
import { Alert, AlertIconAside } from "@Develop/Components/Alert/alert.html";
import Icon from "@Develop/Components/Icon/icon.html";

const AlertDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Alert className="alert-primary">
            A simple Primary alert—check it out!
        </Alert>
        <Alert className="alert-info">
            A simple Info alert—check it out!
        </Alert>
        <Alert className="alert-danger">
            A simple Danger alert—check it out!
        </Alert>
        <Alert className="alert-success">
            A simple Success alert—check it out!
        </Alert>
        <Alert className="alert-warning">
            A simple Warning alert—check it out!
        </Alert>
        <Alert className="alert-gray">
            A simple Gray alert—check it out!
        </Alert>
    </div>
);

const AlertLink = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Alert className="alert-primary">
            A simple Primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert className="alert-info">
            A simple Info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert className="alert-danger">
            A simple Danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert className="alert-success">
            A simple Success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert className="alert-warning">
            A simple Warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
        <Alert className="alert-gray">
            A simple Gray alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
    </div>
);

const AlertIconsAside = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <AlertIconAside className="alert-info" iconName="information-circle" iconTitle="Info" alertHeadline="Information!">
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </AlertIconAside>
        <AlertIconAside className="alert-danger" iconName="exclamation-triangle" iconTitle="Danger" alertHeadline="Important information!">
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </AlertIconAside>
        <AlertIconAside className="alert-success" iconName="hook-circle" iconTitle="Success" alertHeadline="Well done!">
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </AlertIconAside>
        <AlertIconAside className="alert-warning" iconName="exclamation-circle" iconTitle="Warning" alertHeadline="Warning!">
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </AlertIconAside>
        <AlertIconAside className="alert-gray" iconName="placeholder" iconTitle="Placeholder" alertHeadline="Insignificant information!">
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </AlertIconAside>
    </div>
);

const AlertAddidtionalContent = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Alert className="alert-success">
            <h4 className="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
    </div>
);

const AlertDismissing = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Alert className="alert-warning alert-dismissible fade show">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <Icon aria-hidden="true" name="cross" title="Close" className="icon-close" />
            </button>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>
    </div>
);

const AlertDismissingIconAside = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Alert className="alert-success d-flex alert-dismissible fade show">
            <div className="alert-icon">
                <Icon name="hook-circle" title="Success" className="icon-32" />
            </div>
            <div className="alert-content-with-icon">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <Icon aria-hidden="true" name="cross" title="Close" className="icon-close" />
                </button>
                <h4 className="alert-heading">Well done!</h4>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            </div>
        </Alert>
    </div>
);

export default {
    AlertDefault,
    AlertLink,
    AlertIconsAside,
    AlertAddidtionalContent,
    AlertDismissing,
    AlertDismissingIconAside,
};
