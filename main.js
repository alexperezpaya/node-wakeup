// Node Wake Up - 2013 ;)

var os = require('os');

var exec = require('child_process').exec;

var say = require(__dirname + '/lib/say')(os.platform());

say('Welcome!');