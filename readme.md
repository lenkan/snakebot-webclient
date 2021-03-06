#Cygni SnakeBot WebClient
This repository contains the source code for the SnakeBot web client. The application communicates with a snakebot game server using a websocket.

## System requirements
* node and npm: https://nodejs.org/en/

## Run locally
After cloning the repository, cd into the root path and restore all dependencies using *npm install*:
```
> cd /path/to/snakebot-webclient
> npm install
```

The application can be configured to connect to a specified snake game server using
```
> npm start -- --server <url>
```

To run the application against a local game server listening on port 8080, you can use:
```
> npm run local
```

## Build application
To build application for production, run
```
> npm run build -- --server <url>
```

The minified output will be copied to dist/bundle.js.

## Docker 
To build Docker image:
```
> docker build -t snake-web-client .
```

To run:
```
> docker run -it --rm --name snake-web-client -p 8090:8090 snake-web-client
```