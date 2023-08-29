# Installation
You can run it either directly or from docker


## Direct run
In the root folder run:
   
    yarn install
  
Then in packages/backend run:

    yarn start

Then in packages/frontend run:

    yarn start

Your app is available on *http://localhost:3001/*

## Run from docker

In the root directory build the docker images:

    docker build -t frontend:latest -f packages/frontend/Dockerfile .
    docker build -t backend:latest -f packages/backend/Dockerfile .

The execute the containers

    docker run -it -p 3000:3000 backend:latest
    docker run -it -p 8080:3000 frontend:latest 

Your app is available on *http://localhost:8080/*

# Potential future work
 - We could use docker-compose instead and differentiate between production and dev environment.
 - We can use nginx so that both apps run on the same port and depending on the url (/api or not) the right proxy pass happens