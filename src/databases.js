const funciones = require('./lib/verifyConnection.js');
const {database1} = require('./keys.js');
module.exports = {
    
    report:funciones.verificar(database1)

}
