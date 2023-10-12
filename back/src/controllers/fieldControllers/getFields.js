const {Field} = require ("../db");


const searchAll = async () => {

const dataBaseFields = await Field.findAll();

return dataBaseFields 
};


module.exports = searchAll


