'use strict';

const {Console} = require('console');
const fs = require('fs');
const path = require('path');

const config = require(path.join(__dirname, './config.js'));

const infoLog = fs.createWriteStream(config.stdout_log_file);
const errLog = fs.createWriteStream(config.stderr_log_file);
const logger = new Console(infoLog, errLog);

let Loggers = {}

class Logger {
  constructor(fileName) {
    this._file = fileName;
  }

  info(msg) {
    logger.log(`${(new Date()).toJSON()} INFO ${this._file} ${msg}`)
  }

  error(msg) {
    logger.error(`${(new Date()).toJSON()} ERROR ${this._file} ${msg}`)
  }
}

exports.getLogger = (fileName) => {
  if(!Loggers.hasOwnProperty(fileName)) {
    Loggers[fileName] = new Logger(fileName);
  }
  return Loggers[fileName];
}

