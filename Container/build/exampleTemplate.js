import config from "@Develop/config";
import path from "path";

/*
    HTML Template Wrapper for Examples
    All examples are rendered inside of this template.
 */
export const htmlTemplateExample = ( reactDom, helmetData, filePath ) => `
        <!DOCTYPE html>
        <html lang="en-GB">
        <head>
            <base href="${ path.relative (path.dirname (filePath), path.resolve (config.docsPath, config.defaultThemePath)) }/">
            <script>
                /* Create and adjust base-path to set correct theme-location */
                if (typeof defaultTheme === "undefined") {
                    var defaultTheme = "${ config.defaultTheme }";
                }
                var theme = localStorage.getItem ("theme") || defaultTheme;
                var baseElement = document.getElementsByTagName ("base") [0];
                var baseElementHref = baseElement.getAttribute ('href');
                baseElement.href = baseElementHref.substr (0, baseElementHref.lastIndexOf('/', baseElementHref.lastIndexOf('/') - 1) + 1) + theme + "/";
            </script>

            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${ helmetData.title.toString () }
            ${ helmetData.meta.toString () }
            <link rel="stylesheet" type="text/css" href="css/cake.css">
        </head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="js/cake.js"></script>
            <script src="../../example.js"></script>
        </body>
        </html>
`;
