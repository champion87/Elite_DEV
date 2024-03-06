const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR Received: ', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    try {
        const chat = await msg.getChat();
        console.log('Incoming message from', chat.name);
        if (msg.body.toLowerCase() === 'hi') {
            chat.sendMessage('Hello!');
        }
    } catch (err) {
        console.error('Error: ', err);
    }
});

client.initialize()