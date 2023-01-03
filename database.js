const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cert', 'user', 'pass', {
    dialect: 'sqlite',
    storage: './database.sqlite'
})


module.exports = sequelize;