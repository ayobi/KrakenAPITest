# Kraken API Test
Testing Kraken's API using Docker, NPM, NodeJS, and ExpressJS.

### Steps to Reproduce
1. Download a code editor like VS Code https://code.visualstudio.com/
2. Install Docker https://www.docker.com/products/docker-desktop
3. Install NodeJS https://nodejs.org/en/
4. Create a folder and then a javascript file with the code below, mine's called `app.js` as seen in the codebase. 

    ```javascript
    const express = require('express');
    const app = express();

    app.listen(3001, () => {
        console.log('My Kraken API');
    })
    ```
    
5. Run `npm init` in the console, this will create your package.json
6. Run `npm install --save express` to install ExpressJS
7. Add a start command to your package.json

    ```json
    "scripts": {
        "start": "node app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
    
8. Add a another file called `Dockerfile` with the code below
    ```Dockerfile
    FROM node:9-slim
    WORKDIR /app
    COPY package.json /app
    RUN npm install
    COPY . /app
    CMD ["npm", "start"]
    ```
9. Run `docker build -t MyKrakenAPI .` to build the Docker image
10. Run `docker run -it -p 9000:3001 MyKrakenAPI` to create the container 
11. Run `docker run -d -p 9000:3001 MyKrakenAPI` to run the container in the background
12. To avoid rebuilding our image everytime a change in the code has been made, we can use nodeman which automatically does the rebuilding seen below

    ```json
    "scripts": {
        "start": "node app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

13. 




# Credit
Used NodeJS API Client found here: https://github.com/nothingisdead/npm-kraken-api


