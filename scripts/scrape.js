var request = require("request");
var cheerio = require("cheerio");


var scrape = function (cb) {

    request("https://www.huffingtonpost.com/", function(error, response, html) {
        
        var $ = cheerio.load(html);
        var articles = [];

        $("h1.title").each(function (i, element) {

            var title = $(element).text();
            var link = $(element).parent().attr("href");
            var teaser = $(element).parent().next().children(".teaser").text();

            if(title && link && teaser){
                var dataToAdd = {
                    title: title,
                    link: link,
                    teaser: teaser
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);

    });
};

module.exports = scrape;