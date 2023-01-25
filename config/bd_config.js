const { Sequelize, Model } = require('sequelize')
var opts = {
    define: {
    }
}
const DATABASE_URL = process.env.DATABASE_URL || '';
const database = new Sequelize(DATABASE_URL, opts)

module.exports = { Model, database }