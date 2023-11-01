const fs = require('fs'); //leer y modificar filesystem
const path = require('path');

const updateMockupFile = async (data) => {
    try {
        const dataString = 'module.exports = ' + JSON.stringify(data, null, 2); //Se agrega el module.exports al json del mockup
        await fs.promises.writeFile(path.join(__dirname,'..','..','..', 'mockUp.js'), dataString, 'utf8');//Se reemplaza el contenido de mockUp.js con el dataString
    } catch (err) {
      throw new Error(`Error al actualizar el archivo mockUp: ${err.message}`);
    }
  };
module.exports= updateMockupFile