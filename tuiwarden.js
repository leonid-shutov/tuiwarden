'use strict';
const fs = require('node:fs');

process.on('unhandledRejection', (reason, promise) => {
  console.error({ promise });
  fs.writeFileSync('error.json', JSON.stringify(reason.message));
  console.error({ reason: reason.message });
});
process.on('uncaughtException', (...args) => {
  console.error({ args });
  fs.writeFileSync('error.json', JSON.stringify(args));
});

const uncommonjs = require('@leonid-shutov/uncommonjs');
const path = require('path');
const tui = await import('@opentui/core');

const rootDir = path.resolve(__dirname);
const context = { console, tui, process, Buffer };
uncommonjs.loadApplication(context, { rootDir });
