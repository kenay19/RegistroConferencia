const {report} = require('../databases');

module.exports = {
    select: async(Cuenta) => {
        const result = await report.query('SELECT * FROM conferencia WHERE Cuenta=? ',[Cuenta]);
        if(result[0] != null) {
            if(result[0].Registro==0) {
                return [true,result[0]];
            }else{
                return [true,"Registro Realizado Anteriormente"];
            }
        }else{
            return [false];
        }
    },
    update: async(data) => {
        const result = await report.query('UPDATE conferencia SET Registro=1 WHERE Cuenta=?',[data]);
        if(result.changedRows === 1) {
            return "Registro Realizado Correctamente";
        }else{
            return "Registro Fallido";
        }
    }
}