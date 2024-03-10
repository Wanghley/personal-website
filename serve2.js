const { exec } = require('child_process');
const path = require('path');

// Define the build directory
const buildDirectory = 'build';

// Construct the serve command
const serveCommand = `serve -s ${buildDirectory}`;

// Run the serve command
const child = exec(serveCommand, { cwd: __dirname });

// Handle errors
child.on('error', (err) => {
  console.error('Error executing serve:', err);
});

// Display output
child.stdout.on('data', (data) => {
  console.log(data);
});

// Display errors
child.stderr.on('data', (data) => {
  console.error(data);
});

// Handle process exit
child.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Serve process exited with code ${code}`);
  } else {
    console.log('Serve process exited successfully');
  }
});
