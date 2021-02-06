require('../services/dotenv');

const functions   = require('./functions');
const packageFile = require('../package');

const { STAGE } = process.env;

///////////////////////////////////////////// START EXPORT CONFIGURATION //////////////////////////////////////////////
exports.frameworkVersion = '2';
exports.service          = packageFile.name;
exports.functions        = functions;

exports.provider = {
  stage:   STAGE,
  name:    'aws',
  runtime: `nodejs${packageFile.engines.node}`,
  apiName: `${packageFile.name}-${STAGE}-rest-api`,
  region:  'eu-central-1',
}

exports.plugins = ['serverless-offline'];
////////////////////////////////////////////// END EXPORT CONFIGURATION ///////////////////////////////////////////////
