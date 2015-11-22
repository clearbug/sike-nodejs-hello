#!/usr/bin/env node
var greet = require("greet");
var parseArgs = require('minimist');
var drunk = parseArgs(process.argv.slice(2))['drunk'];
console.log(greet(process.argv[2], drunk));

