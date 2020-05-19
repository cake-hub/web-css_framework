/*
    Page Builder used to generate the different types of html-pages.
 */
import "module-alias/register";
import fs from "fs-extra";
import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import { logToConsole } from "../docs/helper";
import { htmlTemplateExample } from "./exampleTemplate";

//Build ExamplePage
export const buildExamplePage = (exampleName, exampleTemplate, exampleOutputFolder) => {
    const fileName = exampleOutputFolder + "/" + exampleName + ".html";
    logToConsole ("CAKE-BUILDER", "Build page", fileName);
    const htmlString = new Uint8Array(
        Buffer.from(
            htmlTemplateExample (
                renderToString(
                    <React.Fragment>
                        <Helmet>
                            <title>{ exampleName }</title>
                        </Helmet>
                        {
                            (exampleTemplate.template) ? (
                                    <div className={exampleTemplate.c_previewClassName ? exampleTemplate.c_previewClassName : ""}>
                                        {exampleTemplate.template (exampleTemplate.props ? exampleTemplate.props : {})}
                                    </div>
                            ) : exampleTemplate({})
                        }
                    </React.Fragment>
                 ),
                Helmet.renderStatic(),
                fileName
            )
        )
    );
    fs.writeFileSync( fileName, htmlString );
}
