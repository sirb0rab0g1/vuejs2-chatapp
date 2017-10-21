var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://dashboard.heroku.com"',
  WS_URL:'"ws://dashboard.heroku.com"',
})
