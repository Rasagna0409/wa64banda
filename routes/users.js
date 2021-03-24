var express = require('express');
var router = express.Router();
var m = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  m +=1;
  res.send(`User accesses are: ${m}`);
});

module.exports = router;
