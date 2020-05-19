import React from "react";
import Pagination from "@Develop/Components/Pagination/pagination.html";
import {PaginationItem, PaginationItemNotLinked} from "@Develop/Components/Pagination/paginationItem.html";
import Icon from "@Develop/Components/Icon/icon.html";

const PaginationDefault = () => (
    <Pagination>
        <PaginationItem><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
    </Pagination>
);

const PaginationDisabledActiveState = () => (
    <Pagination>
        <PaginationItem className="disabled" disabled tabIndex="-1" aria-disabled="true"><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
        <PaginationItem>1</PaginationItem>
        <PaginationItem className="active" aria-current="page">2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
    </Pagination>
);

const PaginationWithoutLink = () => (
    <Pagination>
        <PaginationItemNotLinked className="disabled" tabIndex="-1" aria-disabled="true"><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItemNotLinked>
        <PaginationItem>1</PaginationItem>
        <PaginationItemNotLinked className="active" aria-current="page">2</PaginationItemNotLinked>
        <PaginationItem>3</PaginationItem>
        <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
    </Pagination>
);

const PaginationVariants = () => (
    <React.Fragment>
        <Pagination>
            <PaginationItem><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
            <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
        </Pagination>

        <Pagination>
            <PaginationItem className="disabled" tabIndex="-1" aria-disabled="true"><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
            <PaginationItemNotLinked className="active" aria-current="page">1</PaginationItemNotLinked>
            <PaginationItem>2</PaginationItem>
            <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
        </Pagination>

        <Pagination>
            <PaginationItem className="disabled" tabIndex="-1" aria-disabled="true"><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
            <PaginationItemNotLinked className="active" aria-current="page">1</PaginationItemNotLinked>
            <PaginationItem>2</PaginationItem>
            <PaginationItem>3</PaginationItem>
            <PaginationItem>4</PaginationItem>
            <PaginationItem>5</PaginationItem>
            <PaginationItem>6</PaginationItem>
            <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
        </Pagination>

        <Pagination>
            <PaginationItem className="disabled" tabIndex="-1" aria-disabled="true"><Icon name="arrow-left" title="Previous" className="btn-icon icon-16" /></PaginationItem>
            <PaginationItemNotLinked className="active" aria-current="page">1</PaginationItemNotLinked>
            <PaginationItem>2</PaginationItem>
            <PaginationItemNotLinked>…</PaginationItemNotLinked>
            <PaginationItem>999</PaginationItem>
            <PaginationItem><Icon name="arrow-right" title="Next" className="btn-icon icon-16" /></PaginationItem>
        </Pagination>
    </React.Fragment>
);

export default {
    PaginationDefault,
    PaginationDisabledActiveState,
    PaginationWithoutLink,
    PaginationVariants
};
