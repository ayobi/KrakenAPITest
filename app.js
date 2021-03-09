const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log('My Kraken API');
})

const key          = 'youapikey'; // API Key
const secret       = 'your secret'; // API Private Key
const otp          = 'yourotp'; //2fa password
const KrakenClient = require('kraken-api');
const kraken       = new KrakenClient(key, secret, otp);

(async () => {
	//Get server time
	console.log(await kraken.api('Time'));

	// Get ticker info
	console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD' }));
	
	// Display user's open orders
	console.log(await kraken.api('OpenOrders'));

	
})(); 
