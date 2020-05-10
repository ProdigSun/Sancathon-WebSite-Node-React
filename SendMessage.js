const AUTH_TOKEN = process.env.AUTH_TOKEN;
const ACCOUNT_SID = process.env.ACCOUNT_SID;
const TWILIO_PHONE = process.env.TWILIO_PHONE;

const accountSid = ACCOUNT_SID;
const authToken = AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


import axios from 'axios';

sendMessage = (phone, status) => {
    client.messages
        .create({
            from: `whatsapp:${TWILIO_PHONE}`,
            body: 'Hello there!',
            to: `whatsapp:+55${phone}`
        })
        .then(message => console.log(message.sid));
}

export default sendMessage;