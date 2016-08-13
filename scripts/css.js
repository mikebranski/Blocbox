var child_process = require('child_process');
var path = require('path');

var cmd = path.resolve('node_modules', '.bin', 'postcss');

// Wrap the entire thing in quotes to account for spaces in the path (escaping
// them with backslashes won't work on Windows).
cmd = '"' + cmd + '"';

// Add the parameters. Paths will be relative to the project root (cwd).
cmd += ' -c postcss.config.js';

// TODO: Detect changes to css.js or postcss.config.js and restart the script
// automatically.

// Kick it off.
child_process.exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  if (stdout) {
    console.log(`stdout: ${stdout}`);
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});
