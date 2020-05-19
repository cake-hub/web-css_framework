import React from "react";
import Accordion from "@Develop/Components/Accordion/accordion.html";
import AccordionItem from "@Develop/Components/Accordion/accordionItem.html";

// TODO: same attribute values for each AccordionItem should be set
// in Accordion (wrapper component) and passed throu every child.
// For now it is necessary to set `c_accordionId`, c_inputName and
// `c_mode` for each Item

const AccordionMultiple = () => (
        <Accordion c_accordionId="accordion1">
            <AccordionItem
                c_accordionId="accordion1"
                name="accordion1_first"
                c_labelText="Collapsible Group Item #1"
                defaultChecked>
                Lorem ipsum
            </AccordionItem>
            <AccordionItem
                c_accordionId="accordion1"
                name="accordion1_second"
                c_labelText="Collapsible Group Item #2">
                Lorem ipsum
            </AccordionItem>
            <AccordionItem
                c_accordionId="accordion1"
                name="accordion1_third"
                c_labelText="Collapsible Group Item #3"
                disabled>
                Lorem ipsum
            </AccordionItem>
        </Accordion>
);

const AccordionSingle = () => (
        <Accordion c_accordionId="accordion2">
            <AccordionItem
                c_accordionId="accordion2"
                name="accordion2_input"
                c_mode="single"
                c_labelText="Collapsible Group Item #1"
                defaultChecked>
                Lorem ipsum
            </AccordionItem>
            <AccordionItem
                c_accordionId="accordion2"
                name="accordion2_input"
                c_mode="single"
                c_labelText="Collapsible Group Item #2">
                Lorem ipsum
            </AccordionItem>
            <AccordionItem
                c_accordionId="accordion2"
                name="accordion2_input"
                c_mode="single"
                c_labelText="Collapsible Group Item #3"
                disabled>
                Lorem ipsum
            </AccordionItem>
        </Accordion>
);

export default {
    AccordionMultiple,
    AccordionSingle
};
