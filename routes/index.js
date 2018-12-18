var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('locale/:lang', (req,res,next) => {
  res.cookie(
      'secret-lang',
      req.params.lang
  )
    res.redirect('/');
});


module.exports = router;
