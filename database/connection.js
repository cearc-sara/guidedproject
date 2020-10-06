const knex = require("knex")

const knexfile = require("../knexfile")

//on heroku NODE_ENV will be "production"
const enviornment = process.env.NODE_ENV || "development"

const config = knexfile[enviornment]

module.exports = knex(config)