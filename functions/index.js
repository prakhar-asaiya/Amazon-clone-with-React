const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I5R4hK6FOwQJiDSDxn8kxGPomYHU5pZqrbdVihDH0X4rl7DONFrTEnaA9PkghbqwaMdN971vTHtYHb3hHxHuYBM00l9fTNkDp');

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world!'));
app.get('/up', (request, response) => response.status(200).send('Whats up?'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // this is in subunits of the currency
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-with-react-28928/us-central1/api