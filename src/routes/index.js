const router = require('express').Router();
const {select,update} = require('../lib/uaemex.js');
const QRCode = require('qrcode');
router.get('/',(req,res) => {
    res.render('index');
});

router.post('/',(req, res) => {
    select(req.body.Cuenta).then((e)=> {
        if(e[0]) {
            if(e[1] == "Registro Realizado Anteriormente"){
                res.json(e[1]);
            }else{
                update(e[1].Cuenta).then((respuesta) => {
                    if(respuesta == "Registro Realizado Correctamente") {
                        QRCode.toString(JSON.stringify(e[1]),{type:'terminal', errorCorrectionLevel: 'H' }, function (err, url) {
                            console.log(url)
                          })
                    }else{
                        res.json(respuesta);
                    }
                });
            }
        }else{
            res.json({
                reponse: "El numero de cuenta no existe en la base de datos"
            });
        }
    });
    
});


module.exports = router;