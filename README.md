# Usage
You can run it either directly or from docker.


## Run Directly
In the root folder run:
   
    yarn install
  
Then in packages/backend run:

    yarn start

Then in packages/frontend run:

    yarn start

Your app is available on *http://localhost:3001/*

## Run from Docker

In the root directory build the docker images:

    docker build -t frontend:latest -f packages/frontend/Dockerfile .
    docker build -t backend:latest -f packages/backend/Dockerfile .

The execute the containers

    docker run -it -p 3000:3000 backend:latest
    docker run -it -p 8080:3000 frontend:latest 

Your app is available on *http://localhost:8080/*

# Known Issues & Ideas for Improvement
 - We could leverage docker-compose instead of docker run
 - We need to differentiate between production and dev environment
 - We can use nginx so that both apps run on the same port and depending on the url (/api or not) the right proxy pass happens
 - There might me some empty controllers etc that I haven't cleaned up
