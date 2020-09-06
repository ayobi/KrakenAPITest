const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('holyyyy'));

app.listen(3001, () => {
    console.log('My Kraken API');
})

const key          = 'yZQFkqCTVWdSuJ9zoHB0uUI00pjh67TjIJW6CHN0+fFnTHo5c+eo0NCY'; // API Key
const secret       = 'HNb4JhFRBfA63UHRQmGYGdi3C8wey4c0qO/WW7aC04eL8kSGbywwf12FUiBRcDSxz5TJuqd5aLb7NTEutOEkfw=='; // API Private Key
const otp          = 'zipzapalltheway1$';
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