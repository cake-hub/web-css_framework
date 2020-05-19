import React from "react";
import Badge from "@Develop/Components/Badge/badge.html";

const BadgeSize = () => (
    <React.Fragment>
        <h1>Example heading<Badge className="badge-primary badge-large ml-1">large</Badge></h1>
        <h2>Example heading<Badge className="badge-primary ml-1">basic</Badge></h2>
        <h3>Example heading<Badge className="badge-primary ml-1">basic</Badge></h3>
        <h4>Example heading<Badge className="badge-primary ml-1">basic</Badge></h4>
        <h5>Example heading<Badge className="badge-primary badge-small ml-1">small</Badge></h5>
    </React.Fragment>
);

const BadgeColor = () => (
    <React.Fragment>
        <Badge className="badge-primary mr-1">Primary</Badge>
        <Badge className="badge-danger mr-1">Danger</Badge>
        <Badge className="badge-gray mr-1">Gray</Badge>
        <Badge className="badge-info">Info</Badge>
    </React.Fragment>
);

const BadgeAddon = () => (
    <React.Fragment>
        <Badge className="badge-addon badge-primary mr-1">9</Badge>
        <Badge className="badge-addon badge-primary mr-1">99</Badge>
        <Badge className="badge-addon badge-primary">99+</Badge>
    </React.Fragment>
);

const BadgeAccessibility = () => (
    <span>
        Notifications<Badge className="badge-primary badge-addon ml-1">9</Badge>
        <span className="sr-only">unread messages</span>
    </span>
);

const BadgeLinks = () => (
    <React.Fragment>
        <Badge className="badge-primary mr-1" href="#">Primary</Badge>
        <Badge className="badge-danger mr-1" href="#">Danger</Badge>
        <Badge className="badge-gray mr-1" href="#">Gray</Badge>
        <Badge className="badge-info" href="#">Info</Badge>
    </React.Fragment>
);

export default {
    BadgeSize,
    BadgeColor,
    BadgeAddon,
    BadgeAccessibility,
    BadgeLinks,
};
