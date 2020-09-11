# Kraken API Test
Testing Kraken's API using Docker, NPM, NodeJS, and ExpressJS.

### Steps to Reproduce
1. Download a code editor like VS Code https://code.visualstudio.com/
2. Install Docker https://www.docker.com/products/docker-desktop
3. Install NodeJS https://nodejs.org/en/
4. Create a folder for your project. Open folder in VS Code and create a javascript file with the code below, mine's called `app.js` as seen in the codebase

    ```javascript
    const express = require('express');
    const app = express();

    app.listen(3001, () => {
        console.log('My Kraken API');
    })
    ```
    
5. Run `npm init` in the terminal, this will create your package.json
6. Run `npm install --save express` to install ExpressJS
7. Add a start command to your package.json and then run `npm run start` to see that it works

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
9. Run `docker build -t mykrakenapi .` to build the Docker image
10. Run `docker run -it -p 9000:3001 mykrakenapi` to create the container 
11. Run `docker run -d -p 9000:3001 mykrakenapi` to run the container in the background
12. To avoid rebuilding our image everytime a change in the code has been made, we can use `nodeman` which automatically does the rebuilding, Run `npm install --save nodemon` and change the `start` command seen  in the code below

    ```json
    "scripts": {
        "start": "nodemon app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```

13. Run `docker build -t mykrakenapi .` so that we can have `nodemon` in our image for further usage
14. Run `npm install kraken-api` to install out Kraken API
15. Add to the `app.js` file your Kraken info and your desired API call

    ```javascript
    const key          = 'Your API Key Here'; // API Key
    const secret       = 'Your API Private Key Here'; // API Private Key
    const otp          = 'Your 2FA Password Here'; //2FA Password If Needed
    const KrakenClient = require('kraken-api');
    const kraken       = new KrakenClient(key, secret, otp);

    (async () => {
        //Get server time
        console.log(await kraken.api('Time'));

        // Get Ticker Info
        console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD' }));

        // Display user's open orders
        console.log(await kraken.api('OpenOrders'));
   
	})(); 
    ```

16. Run `docker run -it -p 9000:3001 -v $(pwd):/app mykrakenapi` to kickstart the container, and you should see your desired results in the console. :+1:


# Credit
Used NodeJS API Client found here: https://github.com/nothingisdead/npm-kraken-api


