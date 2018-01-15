//Server routes
var scrape = require("../scripts/scrape");

var headlinesController = require("../controllers/headlines");
var notesController = require("..controllers/notes");



module.exports = function(router){
    //this routes the homepage
    router.get("/", function(req,res){
        res.render("home");
    });

    //this routes saved handlebars page
    router.get("/saved", function(req,res){
        res.render("saved");
    });

    router.get("/api/fetch", function(req,res){

        headlinesController.fetch(function(err, doc){

            if(!doc || docs.insertedCount === 0) {
                res.json({
                    message: "No new articles today. Check back tomorrow."
                });

            } else{
                res.json({
                    message: "Added" + docs.insertedCount + " new articles!"
                });
            }
        });
    });

    //when routes headlines
    router.get("/api/headlines", function(req,res){
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }

        headlinesController.get(query, function(data){
            res.json(data);
        });
    });

    router.delete("/api/headlines/:id", funcrion(req,res){
        var query = {};
        query._id = req.params.id;
        headlinesController.delete(query, function(err, data){
            res.json(data);
        });
    })
};