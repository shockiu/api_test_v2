const { Sequelize, Model } = require('sequelize')
var opts = {
    define: {
    }
}
const DATABASE_CONN = process.env.DATABASE || 'postgres://shockiu:4evBw9JpmD61f4GwAh53UWgcATbm9fpp@dpg-cf8ohg2rrk0e2au7b1k0-a/bd_test_prueba';
//const database = new Sequelize('postgres://usuario:clave@localhost:5432/api_test', opts)
const database = new Sequelize('postgres://shockiu:4evBw9JpmD61f4GwAh53UWgcATbm9fpp@dpg-cf8ohg2rrk0e2au7b1k0-a/bd_test_prueba', {
    dialect: 'postgres'
})

module.exports = { Model, database }