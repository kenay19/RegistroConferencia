const router = require('express').Router();
const {select,update} = require('../lib/uaemex.js');
const qr = require('qr-image');
const fs = require('fs');
router.get('/',(req,res) => {
    res.render('index');
});

router.post('/',(req, res) => {
    select(req.body.Cuenta).then((e)=> {
        if(e[0]) {
            if(e[1] == "Registro Realizado Anteriormente"){
                res.json({
                    response: e[1],
                    cuenta: e[2].Cuenta,
                });
            }else{
                update(e[1].Cuenta).then((respuesta) => {
                    if(respuesta == "Registro Realizado Correctamente") {
                        e[1].Registro = '1';
                        qr.image(JSON.stringify(e[1]),{type:'svg'}).pipe(fs.createWriteStream('src/public/img/'+e[1].Cuenta+".svg"));
                        res.json({
                            response:respuesta,
                            cuenta: e[1].Cuenta
                        });
                    }else{
                        res.json({
                            response: respuesta
                        });
                    }
                });
            }
        }else{
            res.json({
                response: "El numero de cuenta no existe en la base de datos"
            });
        }
    });
    
});


module.exports = router;