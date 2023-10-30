const { Field } = require("../db");

async function generateFields() {
  // const mockUpFields = await ;
  const apiData = FieldsInApi.data.results;
  // Con esto creamos todos los géneros que hay en la DB creo.
  apiData.forEach((x) => {
    Field.findOrCreate({
      where: { name: x.name, id: x.id },
    });
  });

  // No se que devolver jajaja
  return "Ok";
  //Nota: El id número 9 por alguna razón es 'not Found'
}

module.exports = generateFields;
