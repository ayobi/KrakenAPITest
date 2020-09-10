# Kraken API Test
Testing Kraken's API using Docker, NPM, NodeJS, and ExpressJS.

### Steps to Reproduce
1. Download a code editor like VS Code https://code.visualstudio.com/
2. Install Docker https://www.docker.com/products/docker-desktop
3. Install NodeJS https://nodejs.org/en/
4. Get the first 6 lines of code from app.js
```javascript
const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log('My Kraken API');
})
```



, then run `npm init` in the console, this will create your package.json



# Credit
Used NodeJS API Client found here: https://github.com/nothingisdead/npm-kraken-api


