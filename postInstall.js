'use strict';

const path = require('path');
const readline = require('readline')

const db = require(path.join(__dirname, 'db.js'));
const config = require(path.join(__dirname, 'config.js'));

function printUsage() {
  console.log('Usage: node postInstall.js $action')
  console.log('  $action: register|privilege')
}

if(process.argv.length < 3) {
  printUsage()
  process.exit(1)
}

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if(process.argv[2] == 'register') {
  console.log('Register this app')

  r1.question('Please input the admin key:', (key) => {
    db.registerApp(key, (err, appKay) => {
      if(err) {
        console.log(`Register app failed: ${err}`)
      }

      console.log(`Register this application OK.`)
      console.log(`Kay of this application is: ${appKay}`);

      r1.close();
    });
  });
} else if (process.argv[2] == 'privilege') {
  console.log('Privilege this app')

  r1.question('Please input the admin key:', (key) => {
    db.privilege(key, (err, tables) => {
      if(err) {
        console.log(`Privilege app failed: ${err}`)
      }

      console.log(`Has privilege to ${tables}`);
      
      r1.close();
    });
  });
} else {
  printUsage()
}

