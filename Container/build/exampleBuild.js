import "module-alias/register";
import fs from "fs-extra";
import path from "path";
import { fetchFiles } from "@Develop/helper";
import config from "@Develop/config";
import { buildExamplePage } from "./pageBuildExample";


const examplesFolderName = "/" + config.pageExamplePath;
const componentsFolder = path.resolve (__dirname, "../docs");


//1. Iterate through the docs folder of the project
const componentsStructure = fetchFiles (componentsFolder , false, true, ['.js'] );
const iterateStructure = (structure, methodToRun) => {
    for (const key in structure) {
        if (typeof structure [key] === "string") {

            //2. Grab all `page.js-files` (ignore all `/assets` and `/examples` folders)
            if (key.toLowerCase () === "page.js") {
                methodToRun (structure [key]);
            }

        } else {
            iterateStructure (structure [key], methodToRun);
        }
    }
}

iterateStructure (componentsStructure, (pageJsPath) => {
    //3. Create `/examples` folder, if not existing
    const examplePath = path.join (path.dirname (pageJsPath), examplesFolderName);
    fs.ensureDir (examplePath);

    //4. Generate the examples exported by the `page.js` file into the `/examples`
    const pageExamples = require (pageJsPath);
    const jsxExamples = pageExamples.default ? pageExamples.default : pageExamples;
    for (const example in jsxExamples) {
        buildExamplePage (example, jsxExamples [example], examplePath);
    }

    //5. go on with next iteration
    return;
})
