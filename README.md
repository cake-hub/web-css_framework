# Cake

## Who we are

CAKE is a design system and frontend framework for the whole "[Schwarz Gruppe](https://jobs.schwarz/)". We offer some tools, guidelines and systems to develop faster products that match the CI.

Check out our project website <https://cake.schwarz>.

## What I am

A **CSS framework** that includes often used components and a style guide for a lot of companies of "Schwarz Gruppe".

It is a fork of Twitters Bootstrap that we customized to our needs. The bootstrap base makes it easy for experienced developers to get started with our system.

## Contact

You have questions or need help? Feel free to mail us <cake@lidl.com>

## Getting started

1. Clone the repo `https://github.com/cake-hub/web-css_framework.git`
2. Cd into the project

## Setup

Please install Docker to start the project.

## Start the project

`docker-compose up`

This will build the docker container and runs `npm install && npm run dev` (might take some time).

When everything is installed and the server has started, open the browser and navigate to `http://localhost:2021`.

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

```yml
…
"scripts": {
    …
    "server": "nodemon --legacy-watch index.js",
    …
},
…
```

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
