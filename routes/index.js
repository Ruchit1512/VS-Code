var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  fs.readdir('./Files',function(err,data){
    res.render('index',{ title: 'Express',data:data});
  })
});


router.post('/createfile', function(req, res) {
  fs.writeFile(`./Files/${req.body.filename}`, "", function(err,data){
   res.redirect('/')
  })
});


router.post('/createfolder', function(req, res) {
  fs.mkdir(`./Files/${req.body.foldername}`, function(err,data){
   res.redirect('/')
  })
});






router.get('/dlt/:naam', function(req,res,next){
  fs.unlink(`./files/${req.params.naam}`,function(err,data){
    res.redirect('/');
  })
})

module.exports = router;
