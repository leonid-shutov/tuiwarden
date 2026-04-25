'use strict';

const uncommonjs = require('@leonid-shutov/uncommonjs');
const blessed = require('blessed');
const path = require('path');

const rootDir = path.resolve(__dirname);
const context = { console, blessed, process, Buffer };

uncommonjs.loadApplication(context, { rootDir });
