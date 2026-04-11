'use strict';

const uncommonjs = require('@leonid-shutov/uncommonjs');
const blessed = require('blessed');
const path = require('path');

const rootDir = path.resolve(__dirname);

process.on('unhandledRejection', (reason, promise) => {
  console.dir({ promise });
  console.dir({ reason });
});

process.on('uncaughtException', (...args) => {
  console.dir({ args });
});

const context = { console, blessed, process, Buffer };

uncommonjs.loadApplication(context, { rootDir });
