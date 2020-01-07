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

            for (var i=0; i<results.length; i++) {
                // making a img div
                var imgbox = $("<img>");
                // the ratings to be shown
                var rating = results[i].rating;
                var ratingDisplay = $("<p>").text("Rating: " + rating);
                // linking the gif url 
                var imgURL = results[i].images.fixed_height.url;
                var gifImg = imgbox.attr("src", imgURL);
                $(".gif-here").prepend(gifImg);
                $(".gif-here").prepend(ratingDisplay);
            };
        })
    })
}
makeBtns();

// function to add another kind of emotion
$(".add-button").on("click", function(){
    var emojinput = $(".user-input").val();
    console.log(emojinput);
    topics.push(emojinput);
    console.log("why isnt it working???")
    makeBtns();
})

