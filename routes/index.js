var express = require('express');
var router = express.Router();


const getTweets = () => {
  console.log("getting tweeeeeeeeeeets!  ")
  const path = "twurl /1.1/search/tweets.json?q=fortune";
  router.get(path, function(req, res, next) {
    console.log("response", res)
    return res
  }) 
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Fortune Teller',
    tweets: getTweets()
  });
});

module.exports = router;
