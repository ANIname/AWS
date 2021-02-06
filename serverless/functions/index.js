const importDir = require('directory-import');

const functions = {};

importDir({}, (functionName, functionPath, functionData) => {
  functions[functionName] = functionData;
});

module.exports = functions;
