//Loads results onto the page
function getResults() {

    $.getJSON("/scrape", function(data){

        //append the title
        for (var i = 0; i < data.length; i ++ ){

            $("#results").append("<div class='card'><div class='card-body'><h1 class='card-text'>" + data[i].title + "</h1></div></div>");
        }
    });
}

//Runs the getResults function
$("#scrape").click(function(){
    getResults();
});