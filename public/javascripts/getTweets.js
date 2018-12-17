//get the JSON data from the Twitter search API
$.getJSON("http://search.twitter.com/search.json?q=jquery4u&rpp=5&callback=?", function(data)
{
    //loop the tweets
    $(data.results).each(function(i,v)
    {
        //...see full code below
    }
}