'use strict';

const path = require('path');
const readline = require('readline')

const db = require(path.join(__dirname, 'db.js'));
const config = require(path.join(__dirname, 'config.js'));

// register app
console.log('Register this app')

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('Please input the admin key:', (key) => {
  db.registerApp(key, (err, appKay) => {
    if(err) {
      console.log(`Register app failed: ${err}`)
    }
    console.log(`Kay of this application is: ${appKay}`);

    r1.close();
  });
});

