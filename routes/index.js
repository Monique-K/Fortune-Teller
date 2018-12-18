var express = require('express');
var router = express.Router();


// (function($,W,D)
// {
//   W.JQUERY4U = W.JQUERY4U || {};
//   W.JQUERY4U.TWITTER = {
//     name: "JQUERY4U TWITTER",
//     init: function(wid)
//     {
//       //load twitter stylesheet
//       $("head").append('');
//       //get the tweets from Twitter API
//       $.getJSON("http://search.twitter.com/search.json?q=fortune&rpp=5&callback=?", function(data)
//       {
//         // console.log(data.items.length);
//         $(data.results).each(function(i,v)
//         {
//           var tweet=''+this.text.linkify().linktag().replace(/'+tweetBy+'';

//           $('#twitter').append(tweet); //add the tweet...

//           });
//         });
//       }
//     }

// })(jQuery,window,document);


const getTweets = () => {
  const path = "twurl /1.1/search/tweets.json?q=fortune";
  router.get(path, function(req, res, next) {
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
