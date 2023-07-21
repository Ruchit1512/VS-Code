var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  fs.readdir('./Files', { withFileTypes: true }, function (err, files) {
    res.render('index', { files: files })
  })
})


router.post('/createfile', function (req, res) {
  fs.writeFile(`./Files/${req.body.filename}`, "", function (err, data) {
    res.redirect('/')
  })
});


router.post('/createfolder', function (req, res) {
  fs.mkdir(`./Files/${req.body.foldername}`,{recursive:true}, function (err, data) {
    res.redirect('/')
  })
});






module.exports = router;
