#!/bin/bash

#Set EXIT script (deconstructor)
set -e
function cleanup {
  echo "Stopping CAKE"
  docker-compose down
}
trap cleanup EXIT

#Define the scripts
if [[ $1 == "dev" ]]
    then docker-compose -f docker-compose.yml -f docker-compose.dev.yml up & (sleep 20 && docker-compose exec cake sh)
  elif [[ $1 == "prod" ]]
    then docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
  else docker-compose up
fi
