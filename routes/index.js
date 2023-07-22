var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */

router.get('/', function (req, res) {
  fs.readdir('./Files', { withFileTypes: true }, function (err, elem) {
    res.render('index', { elem });
  })
})


router.get(`/delete/:filename`, function (req, res) {
  fs.unlink(`./Files/${req.params.filename}`, function (err) {
    res.redirect('/');
  })
})



router.post('/createfile', function (req, res) {
  fs.writeFile(`./Files/${req.body.filename}`, "", function (err, data) {
    res.redirect('/');
  })
});



router.post('/createfolder', function (req, res) {
  fs.mkdir(`./Files/${req.body.foldername}`, { recursive: true }, function (err, data) {
    res.redirect('/')
  })
});


module.exports = router;
