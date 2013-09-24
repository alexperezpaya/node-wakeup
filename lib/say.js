
var say = function (os) {

	if(os == 'darwin'){

		return function (msg){

			var exec = require('child_process').exec;

			exec('say \' ' + msg + ' \'');

		}

	} else{

		process.stdout.write('Dude, os not supported yet :(\n');
		process.exit(1);

	}

}

module.exports = say;