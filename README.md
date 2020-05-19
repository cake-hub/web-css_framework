# Cake

## Getting started
1. Clone the repo
2. Cd into the project
3. Configure(create) `.env` file with your credential and proxy _(If you do not have any credentials ask for some via cake@lidl.com)_

## Setup
Please install Docker to start the projekt.

## Start the project
`docker-compose up`

This will build the docker containers (CAKE and themes) and runs `npm install && npm run dev`. (might take some time)

When everything is installed and the server has started, open the browser and navigate to `http://localhost:2020`.

Alternatively there are further startup possibilities.

`./startup.sh dev` - startup docker containers with command line
`./startup.sh prod` - startup docker containers and run build-commands
`./startup.sh` - run docker and start watch tasks, like before

## Troubleshooting

### Docker container shut down

`docker-compose up` again.

### Connect to the docker container

`docker-compose exec cake sh`

### Nodemon does not restart on WINDOWS when changing files

In some networked environments (such as a container running nodemon reading across a mounted drive), you will need to use the `--legacy-watch` flag which enables polling. This should only be used, when the normal mode does not work, because it will poll every file it can find.
Simply add the flag above to the `package.json` like in the following example:

    …
    "scripts": {
        …
        "server": "nodemon --legacy-watch index.js",
        …
    },
    …

Just be careful that this changes does not get commited!

## Menu configuration (nav.yml files)
Every file will be parsed automatically and everything will be ordered alphabetical in ascending order.
If you want to modify the order in showroom, you have to add a `nav.yml` file inside the section folder.
In this file you can specify the path's to the folders and files. The specified files will be displayed in the order you write them into the nav.yml file. All missing files will be automatically appended to this list during compilation.

```yml
- path: ./Folder-to-Category
    pages:
        - path: ./SomePage/path-to-md-file.md
        - path: …
- path: ./Folder-to-Category
- path: ./Folder-to-Category
```

## Project Origin
[implementing server side rendering](https://medium.com/@alexnm/demystifying-reacts-server-side-render-de335d408fe4).
