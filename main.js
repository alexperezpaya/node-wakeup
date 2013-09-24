// Node Wake Up - 2013 ;)

var os = require('os');

var exec = require('child_process').exec;

if (os.platform() == 'darwin'){

	exec('say "Welcome! I will wake you up soon"');


} else{

	process.stout.write('Not supported yet :(');

}