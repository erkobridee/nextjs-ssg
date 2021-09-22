const execSync = require('child_process').execSync;

const exec = (cmd, options = undefined) => {
  let output;
  try {
    output = cmd ? execSync(cmd, options) : undefined;
  } catch (e) {
    console.error(e);
  }

  if (!output) {
    return '';
  }

  if (options) {
    return output;
  }

  return output.toString().trim();
};

module.exports = exec;
