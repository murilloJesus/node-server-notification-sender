const {JWT} = require('google-auth-library');
const serviceAccount = require('./jwt.keys.json');

var admin = require("firebase-admin");

async function main() {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    var registrationToken = 'fFwCA4KlSbuvvIVCDg1Tj4:APA91bHJiDPhoBbOx00NGyiKLlv-_sfOO_llN9sz4IjCKOqCRXRJ7gXJ2Olh2oRa7qb_NMP9vYCH3i7DZ9pWw3p6VXHWQAtD8476HpYazK6yIqByvbFn78ZROpoVf5-rEHt7hdvOoZBy';

    var message = {
        notification: {
            title: 'letn node.js',
            body: 'node server message'
          },
        android: {
            notification: {
                icon: 'stock_ticker_update',
                color: '#7e55c3'
            }
        },
        data: {
            score: '850',
            time: '2:45'
        },
        token: registrationToken
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });

}

main().catch(console.error);

function getAccessToken() {
    return new Promise(function(resolve, reject) {
      const jwtClient = new JWT(
        key.client_email,
        null,
        key.private_key,
        SCOPES,
        null
      );
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    });
}
