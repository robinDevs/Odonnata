/**
*	Copyright © 2018 Terra nav.
*/

var shell = require('shelljs');
const path 		  = require('path');
module.exports = {
    SearchFile: SearchFile
};

function SearchFile (file_path) 
{
	// if (!shell.which('git')) {
	  shell.find('./odonnata.js');
	// }
	 
	// // Copy files to release dir
	// shell.rm('-rf', 'out/Release');
	// shell.cp('-R', 'stuff/', 'out/Release');
	 
	// // Replace macros in each .js file
	// shell.cd('lib');
	// shell.ls('*.js').forEach(function (file) {
	//   shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
	//   shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
	//   shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
	// });
	// shell.cd('..');
	 
	// // Run external tool synchronously
	// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
	//   shell.echo('Error: Git commit failed');
	//   shell.exit(1);
	// }
}

/*
 * Search a file by the path given
 *
 * @param file_path string
 *
 * @return string
 */
function _searchFileByPath (file_path)
{
	return ;
}

/*
 * Search a file by the name given
 *
 * @param name string
 *
 * @return string
 */
function _searchFileByName (name)
{
	return ;
}