const searchByName = require ("");
const searchAll = require ("");
const getFields = require("../../controllers/fieldControllers/getFields")

const getDriversHandler = async (req, res) => {

const {name} = req.query;
try{
    if(name){
        const fieldByName = await getFields(name);
        res.status(200).json(fieldByName);
    }

    else {
        const allFields = await searchAll()
        res.status(200).json(allFields);
    }
}


catch(error){
    res.status(500).json({error: error.message});
}
};

module.exports = getDriversHandler;