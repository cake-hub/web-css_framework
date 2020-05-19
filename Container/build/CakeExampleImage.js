import React from 'react';
import config from "@Develop/config";
import path from "path";
import { fetchFiles } from "@Develop/helper";

let cakeImages = Object.values (
    fetchFiles (
        config.exampleImagesPath,
        false,
        false,
        [
            ".jpg",
            ".png",
            ".gif",
        ]
    )
).map (cakeImage => path.basename (cakeImage));
const cakeImagesNr = cakeImages.length;

const CakeExampleImage = ( { callFilePath, ...props } ) => {
    const relativePath = path.relative(callFilePath + "/" + config.pageExamplePath, config.exampleImagesPath);

    return (
        <img src={relativePath + '/' + cakeImages [Math.floor (Math.random() * 100000) % cakeImagesNr]} alt="A beautiful cake image *_*" {...props} />
    );
}


export default CakeExampleImage;
