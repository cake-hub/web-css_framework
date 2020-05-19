import React from "react";
import fs from "fs";
import path from "path";
import config from "../../config";
import { kebabCaseToCapitalizedWords } from "../../helper";

import Icon from "./icon.html";

const SvgExtension = '.svg';

const IconTableRows = ({icons}) => {
    let index = 0;

    return (
        <React.Fragment>
            {icons.map(icon => (
                <tr key={icon.id} data-index={++index}>
                    <td>{icon.name}</td>
                    <td><code>{icon.reference}</code></td>
                    <td><code>{icon.path}</code></td>
                    <td>
                        <Icon name={icon.id} title={icon.id} className="icon-32" />
                    </td>
                </tr>
            ))}
        </React.Fragment>
    );
};

const IconTable = ({ files, headline }) => {
    let icons = [];

    //Prepare all the icons
    //id, name, reference, path,
    files.forEach (file => {
        const fileBaseName = path.basename(file, SvgExtension);
        const iconName = kebabCaseToCapitalizedWords(fileBaseName);
        const symbolReference = fileBaseName.toLowerCase();

        icons.push({
            name: iconName,
            reference: '#' + symbolReference,
            path: path.relative (config.rootPath, file),
            id: symbolReference
        });
    });

    return (
        <React.Fragment>
            <h3 id={ headline }>{ kebabCaseToCapitalizedWords(headline) }</h3>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Reference</th>
                            <th>Icon-Path</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <IconTableRows icons={icons} />
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

const isHiddenFolder = (dirName) => {
    return dirName.charAt(0) == '_';
};

const uniqueIconIds = (dirs) => {
    let alreadyUsedIconIds = [];
    for (const dir of dirs.reverse ()) {
        dir.files = dir.files.reverse ().filter (file => {
            const fileBaseName = path.basename (file);
            if (alreadyUsedIconIds.includes (fileBaseName)) {
                return false;
            } else {
                alreadyUsedIconIds.push (fileBaseName);
                return true;
            }
        }).reverse ();
        if (dir.files.length <= 0) {
            dirs.splice (dirs.indexOf (dir), 1);
        }
    }
    dirs = dirs.reverse ();
};

const IconSet = ({ theme }) => {
    let paths2Icons = [];
    paths2Icons.push (config.rootPath + '/assets/icons/');
    if (theme) {
        paths2Icons.push (config.rootPath + '/themes/' + theme + config.themeIconPath);
    }

    let dirs = [];
    let files = [];
    paths2Icons.forEach (path2Icons => {
        if (fs.existsSync (path2Icons)) {
            fs.readdirSync(path2Icons).forEach(directoryOrFile => {
                //Add complete folder
                if (fs.lstatSync(path2Icons + directoryOrFile).isDirectory() && !isHiddenFolder(directoryOrFile)) {
                    //Read all the files inside this dir
                    let folderFiles = [];
                    fs.readdirSync(path2Icons + directoryOrFile).forEach(file => {
                        if ([".DS_Store"].includes(file) || path.parse(file).ext !== SvgExtension) {
                            return;
                        }
                        folderFiles.push (path2Icons + directoryOrFile + '/' + file);
                    });

                    const existingDir = dirs.find (dir => dir.name === directoryOrFile);
                    if (existingDir) {
                        dirs [dirs.indexOf (existingDir)] = {
                            ...existingDir,
                            files: [
                                ...existingDir.files,
                                ...folderFiles
                            ],
                        };
                    } else {
                        dirs.push({
                            name: directoryOrFile,
                            files: folderFiles,
                        });
                    }

                    return;
                }

                //Check if only a tmp-file
                if ([".DS_Store"].includes(directoryOrFile) || path.parse(directoryOrFile).ext !== SvgExtension) {
                    return;
                }

                //Add single files
                files.push (path2Icons + directoryOrFile);
            });
        }
    });

    if (files.length > 0) {
        dirs.push ({
            files,
            name: 'Other',
        });
    }

    uniqueIconIds (dirs);

    return (
        <React.Fragment>
            {dirs.map((dir)=>(
                <IconTable key={dir.name} files={dir.files} headline={dir.name} />
            ))}
        </React.Fragment>
    );
};

export default IconSet;
