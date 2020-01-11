// 3SQE5VuCkqVIishSabpmBpkmfJHnj2Q4 -> api key

// variables
var emoBtn;
var emotion;

// theme is emotions
var topics = ["happy", "sad", "mad", "surprise", "lonely", "content", "dissapointed", "embarassed", "afraid", "listless"];

// making buttons for the emotions
function makeBtns() {
    $(".buttons-here").empty(); //clearing out to prevent repeats

    for (var i = 0; i<topics.length; i++) {
        emoBtn = $("<button>");
        emotion = topics[i];
        emoBtn.append(emotion);
        emoBtn.attr("emotName", emotion);
        $(".buttons-here").append(emoBtn);
    }

    // function for buttons that calls api to show gifs
    $("button").on("click", function() {
        var feeling = $(this).attr("emotName");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=3SQE5VuCkqVIishSabpmBpkmfJHnj2Q4&q=" + 
            feeling + "&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                
                // making a img div
                var imgDiv = $("<div>");
                imgDiv.attr("class", "gif-pics")
                var imgbox = $("<img>");
                imgbox.attr("class", "gifs");
                var imgUrl = results[i].images.fixed_height.url;
                var stillUrl = results[i].images.fixed_height_still.url;
                
                imgbox.attr("still-gifs", stillUrl);
                imgbox.attr("animate-gifs", imgUrl);
                imgbox.attr("src", stillUrl);
                imgbox.attr("gif-status", "still")

                // the ratings to be shown
                var rating = results[i].rating;
                var ratingDisplay = $("<p>").text("Rating: " + rating);
                imgDiv.append(ratingDisplay);

                // linking the gif url
                imgDiv.append(imgbox);
                $(".gif-here").prepend(imgDiv);
            };
            // function to pause or animate gifs
            $(".gifs").on("click", function() {
                var status = $(this).attr("gif-status")
                if (status === "still") {
                    $(this).attr("src", $(this).attr("animate-gifs"));
                    $(this).attr("gif-status", "animated");
                } else {
                    $(this).attr("src", $(this).attr("still-gifs"));
                    $(this).attr("gif-status", "still")
                }
            })
        })


    })


}
makeBtns();

// function to add another kind of emotion
$(".add-button").on("click", function(){
    var emojinput = $(".user-input").val();
    topics.push(emojinput);
    makeBtns();
})


