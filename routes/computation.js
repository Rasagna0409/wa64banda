var express = require('express');
var router = express.Router();
var compute;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    compute=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(compute == 0)
      compute=Math.random()
    
    res.write('Math.log applied to '+compute+" is "+Math.log(compute)+"\n");
    res.end('Math.log10 applied to '+compute+" is "+Math.log10(compute));
 });

module.exports = router;