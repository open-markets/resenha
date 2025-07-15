const { exec } = require('child_process');
const fs = require('fs');

exec('npm run build', {
  cwd: __dirname
}, (err, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  if (err) {
    throw err;
  }
});

fs.cpSync('package.json', 'build/package.json');