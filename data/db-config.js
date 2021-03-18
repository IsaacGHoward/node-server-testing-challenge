const knex = require('knex')
const configs = require('../knexfile.js')
const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(configs[dbEnv])