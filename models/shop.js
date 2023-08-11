const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Shop = sequelize.define('Shop', {
    id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    description: {
        type:Sequelize.STRING,
        allowNull:false
    },
    price: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    quantity: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Shop;