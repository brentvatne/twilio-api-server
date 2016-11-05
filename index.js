const app = require('express')();
const bodyParser = require('body-parser');

const ACCOUNT_SID = '';
const AUTH_TOKEN  = '';
const FROM_NUMBER = '';

const TwilioClient = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

app.use(bodyParser.json());

app.post('/', (req, res) => {
  let { phoneNumber, message } = req.body;

  TwilioClient.sendMessage({
    to: phoneNumber,
    from: FROM_NUMBER,
    body: message,
  }, (err, responseData) => {
    console.log('done');
    console.log(err);
    console.log(responseData);
  });

  res.send(req.body);
});

app.listen();
