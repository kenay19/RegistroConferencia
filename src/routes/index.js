const {report} = require('../databases');
const router = require('express').Router();

router.get('/',(req,res) => {
    res.render('index');
});

router.post('/',async(req, res) => {
    console.log(await report.query('SELECT * FROM report'));
    res.json(await report.query('SELECT * FROM report'));
});


module.exports = router;