import React from "react";
import Trustbar from "@Develop/Components/Trustbar/trustbar.html";
import { TrustbarItem, TrustbarItemNotLinked } from "@Develop/Components/Trustbar/trustbarItem.html";

const TrustbarFourItems = () => (
    <Trustbar>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItem>Trustbar text</TrustbarItem>
    </Trustbar>
);

const TrustbarThreeItems = () => (
    <Trustbar>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItem>Trustbar text</TrustbarItem>
    </Trustbar>
);

const TrustbarNoLinks = () => (
    <Trustbar>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
    </Trustbar>
);

const TrustbarMixed = () => (
    <Trustbar>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
        <TrustbarItem>Trustbar text</TrustbarItem>
        <TrustbarItemNotLinked>Trustbar text</TrustbarItemNotLinked>
    </Trustbar>
);

const TrustbarExceededContent = () => (
    <Trustbar>
        <TrustbarItem>This is a very long Trustbar text. This text shows the behavior of text getting truncated.</TrustbarItem>
        <TrustbarItem>This is a very long Trustbar text. This text shows the behavior of text getting truncated.</TrustbarItem>
        <TrustbarItem>This is a very long Trustbar text. This text shows the behavior of text getting truncated.</TrustbarItem>
        <TrustbarItem>This is a very long Trustbar text. This text shows the behavior of text getting truncated.</TrustbarItem>
    </Trustbar>
);

export default {
    TrustbarFourItems,
    TrustbarThreeItems,
    TrustbarNoLinks,
    TrustbarMixed,
    TrustbarExceededContent
};
