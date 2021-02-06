const dotenv = require('dotenv');

module.exports = {
  ...dotenv.config(),
  ...dotenv.config({ path: `./.env.${process.env.STAGE}` })
}
