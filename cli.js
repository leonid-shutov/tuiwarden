#!/usr/bin/env node
'use strict';

if (process.argv.includes('--version')) {
  console.log('1.0.0-alpha.1');
  process.exit(0);
}

require('./tuiwarden.js');
