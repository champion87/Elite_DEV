const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { response } = require('express');

const client = new Client();

var database = {}

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
        response =  handle_message(msg.body, chat.name);
        chat.sendMessage('Hello!');
        console.log('Incoming message from', chat.name);
    } catch (err) {
        console.error('Error: ', err);
    }
});


function add_to_database(number, key, value) {
  if (database[number]) {
    database[number][key] = value;
  }
  else {
    database[number] = {key: value};
  }
}

function get_from_database(number, key) {
  return database[number][key];
}

function handle_message(message, number) {
  // gets the message and who sent it and return the message to response.
  // if you want to send nothing return None
  // if tou want to save sate save it in the varieble database using add_to_database and get_from_database (see how we handled "my name is")
  // to add more fitures edit this function!!
    
  var flag = false;
  if(message.toLowerCase().startsWith("my name is")) {
    add_to_database(number, "name", message.slice("my name is".length, number.length));
    flag = true;
  }
  if(message.toLowerCase() == "hi" || flag) {
    return "hi " + get_from_database(number, "name");
  }

  


}

client.initialize();

// IMPORTANT!!!

// how to install: install node js from google, than run npm install whatsapp-web.js qrcode-terminal to install the package
// how to run: run in cmd: "node bot_simple.js", and than ask jaks to scan the barcode.
// todo: add more fitures
// todo: fix bug (there are small bugs in "my name is"
// todo: add option to to not scan everey time (you need zkas in order to scan)
