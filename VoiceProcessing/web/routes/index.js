let express = require('express');
let router = express.Router();
let audio = require('../controller/audio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', audio.analysis);

module.exports = router;
