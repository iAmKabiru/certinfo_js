const {Model, DataTypes} = require('sequelize')
const sequelize = require('./database');

class Certificate extends Model{}


Certificate.init({
    certificate_id: {
        type: DataTypes.STRING
    },
    full_name:{
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATE
    },
    type:{
        type: DataTypes.STRING
    },
    issued_on:{
        type: DataTypes.DATE
    },
    expired_on:{
        type: DataTypes.DATE
    },
},{
    sequelize,
    modelName: 'certificate'
})


module.exports = Certificate;