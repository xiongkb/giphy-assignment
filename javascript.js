// 3SQE5VuCkqVIishSabpmBpkmfJHnj2Q4 -> api key

// variables
var emoBtn;
var emotion;

// theme is emotions
var topics = ["happy", "sad", "mad", "surprise", "lonely", "content", "dissapointed", "embarassed", "afraid", "listless"];

// making buttons for the emotions
for (var i = 0; i<topics.length; i++) {
    emoBtn = $("<button>");
    emotion = topics[i];
    emoBtn.append(emotion);
    emoBtn.attr("emotName", emotion);
    $(".buttons-here").append(emoBtn);
}
$("button").on("click", function() {
    var feeling = $(this).attr(emotion);
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=3SQE5VuCkqVIishSabpmBpkmfJHnj2Q4&q=&tag=" + 
        feeling + "&limit=10&offset=0&rating=G&lang=en"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
    })
})