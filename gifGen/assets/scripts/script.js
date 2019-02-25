
$(document).ready(function() {

    function clearAll() {
      $("#displayDiv").removeClass("d-none");
      $("#infoBar").empty();
      $("#instText").empty();
      $("#gifDisplay").empty(); 
      $("#moarButton").empty();
      $("#moarButton").show();
      $("#gifDisplayMore").empty();
      $("#masButton").empty();
      $("#masButton").show();
      $("#gifDisplayMas").empty();
      $("#endButton").empty();
    }
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    
    function displayFirstRow (obj, usrSearchName) {
      for (var i = 0; i < 4; i++) {
          var topDiv = $("<div>").addClass("col-md-3");
          var gifDiv = $("<div>").addClass("thumbnail");
    
          var caption = $("<div>").addClass("caption text-white roundfont");
          var rating = obj[i].rating.toUpperCase();
          var ratingText = $("<p>").text("Rating: " + rating);
          var title = obj[i].title;
          var titleText = $("<p>").text("Title: " + title);
          caption.prepend(ratingText);
          caption.prepend(titleText);
    
          var gifImg = $("<img>").addClass(".img-fluid rounded gifToggleOne");
          gifImg.attr("src", obj[i].images.fixed_width_still.url);
          gifImg.attr("url-moving", obj[i].images.fixed_width.url);
          gifImg.attr("url-still", obj[i].images.fixed_width_still.url);
          gifImg.attr("isgifmoving", "nope");
    
          gifDiv.prepend(caption);
          gifDiv.prepend(gifImg);
    
          topDiv.prepend(gifDiv);
          $("#gifDisplay").prepend(topDiv);
          }
          console.log("first row of GIFs displayed!");
    
          // toggle GIF animations....
          $(".gifToggleOne").on("click", function() {
            var isMoving = $(this).attr("isgifmoving");
            console.log(`GIF first row clicked, isGifmoving: ${isMoving}`);
            if (isMoving === "nope") {
            $(this).attr("src", $(this).attr("url-moving"));
            $(this).attr("isgifmoving", "yeah");
            console.log(`Changed GIF to moving`);
            } 
            if (isMoving === "yeah") {
            $(this).attr("src", $(this).attr("url-still"));
            $(this).attr("isgifmoving", "nope");
            console.log(`Changed GIF to still`);
        }
          });  
    
          // the moarButton....
          var moarButton = $("<div>").addClass("btn btn-outline-warning btn-block my-2 my-sm-0 vgfont");
          var moreText = $("<span>").text(`Show more GIFs of "${usrSearchName}"!!!`);
          moarButton.prepend(moreText);
          $("#moarButton").prepend(moarButton);
    }
    
    function displaySecondRow (thingy, usrSrchNm) {
      $("#moarButton").hide('slow');
      $("#gifDisplayMore").empty();
      $("#masButton").empty();
      $("#masButton").show();
      $("#gifDisplayMas").empty();
      $("#endButton").empty();
        
      // >>>> DISPLAY MOAR GIFS
      for (var i = 4; i < 24; i++) {
        var topDiv = $("<div>").addClass("col-md-3");
        var gifDiv = $("<div>").addClass("thumbnail");
    
        var caption = $("<div>").addClass("caption text-white roundfont");
        var rating = thingy[i].rating.toUpperCase();
        var ratingText = $("<p>").text("Rating: " + rating);
        var title = thingy[i].title;
        var titleText = $("<p>").text("Title: " + title);
        caption.prepend(ratingText);
        caption.prepend(titleText);
    
        var gifImg = $("<img>").addClass(".img-fluid rounded gifToggleTwo");
        gifImg.attr("src", thingy[i].images.fixed_width_still.url);
        gifImg.attr("url-moving", thingy[i].images.fixed_width.url);
        gifImg.attr("url-still", thingy[i].images.fixed_width_still.url);
        gifImg.attr("isgifmoving", "nope");
    
        gifDiv.prepend(caption);
        gifDiv.prepend(gifImg);
    
        topDiv.prepend(gifDiv);
        $("#gifDisplayMore").prepend(topDiv);
      }
    
      // toggle GIF animations....
      $(".gifToggleTwo").on("click", function() {
        var isMoving = $(this).attr("isgifmoving");
        console.log(`GIF row 2 clicked, isGifmoving: ${isMoving}`);
        if (isMoving === "nope") {
            $(this).attr("src", $(this).attr("url-moving"));
            $(this).attr("isgifmoving", "yeah");
            console.log(`Changed GIF to moving`);
            } 
            if (isMoving === "yeah") {
            $(this).attr("src", $(this).attr("url-still"));
            $(this).attr("isgifmoving", "nope");
            console.log(`Changed GIF to still`);
        }
      });  
    
      // masButton (sponsored by #TacoBell... live Mas)
      var masButton = $("<div>").addClass("btn btn-outline-warning btn-lg btn-block px-4 my-2 my-sm-0 vgfont");
      var masText = $("<span>").text(`I Can Haz Moar ${usrSrchNm} GIFZ?!?!!???`);
      masButton.prepend(masText);
      $("#masButton").prepend(masButton);
    }
    
    function displayThirdRow(theObj, userSubmit) {
      $("#masButton").hide('slow');
      $("#gifDisplayMas").empty();
      $("#endButton").empty();
      // I CAN HAZ DISPLAYZ YET MOAR GIFZ
      for (var i = 24; i < 48; i++) {
        var topDiv = $("<div>").addClass("col-md-3");
        var gifDiv = $("<div>").addClass("thumbnail");
    
        var caption = $("<div>").addClass("caption text-white roundfont");
        var rating = theObj[i].rating.toUpperCase();
        var ratingText = $("<p>").text("Rating: " + rating);
        var title = theObj[i].title;
        var titleText = $("<p>").text("Title: " + title);
        caption.prepend(ratingText);
        caption.prepend(titleText);
    
        var gifImg = $("<img>").addClass(".img-fluid rounded gifToggleTres");
        gifImg.attr("src", theObj[i].images.fixed_width_still.url);
        gifImg.attr("url-moving", theObj[i].images.fixed_width.url);
        gifImg.attr("url-still", theObj[i].images.fixed_width_still.url);
        gifImg.attr("isgifmoving", "nope");
    
        gifDiv.prepend(caption);
        gifDiv.prepend(gifImg);
    
        topDiv.prepend(gifDiv);
        $("#gifDisplayMas").prepend(topDiv);
      }
    
      // toggle GIF animations....
      $(".gifToggleTres").on("click", function() {
        var isMoving = $(this).attr("isgifmoving");
        console.log(`GIF row 3 clicked, isGifmoving: ${isMoving}`);
        if (isMoving === "nope") {
            $(this).attr("src", $(this).attr("url-moving"));
            $(this).attr("isgifmoving", "yeah");
            console.log(`Changed GIF to moving`);
            } 
            if (isMoving === "yeah") {
            $(this).attr("src", $(this).attr("url-still"));
            $(this).attr("isgifmoving", "nope");
            console.log(`Changed GIF to still`);
        }
      });  
    
      // endButton (shshsh... they dont know that)
      var endButton = $("<div>").addClass("btn btn-outline-danger btn-lg btn-block px-4 my-2 my-sm-0 vgfont");
      var endText = $("<span>").text(`moar m0ar m0aRRR ... Gimme ALL teh GIFS of ze ${userSubmit}!!!`);
      var kitteh = $("<img>").attr("src", "assets/images/kitteh.gif");
      endButton.prepend(endText);
      endButton.append(kitteh);
      $("#endButton").prepend(endButton);
    }
    
    $("#userSubmit").on("click", function(e) {
        e.preventDefault();
        var topic = $("#userTopic").val().trim();
    
        $('#buttonDtext').addClass("d-none");
        var newButton = $("<button>").addClass("btn btn-outline-warning vgfont gifbutton my-1 mx-1");
        newButton.attr("type","button");
        newButton.attr("data-topic",topic);
        newButton.text(topic);
        console.log("newButton is: " + newButton);
        $("#buttonDisplay").prepend(newButton);
    
    
        $(".gifbutton").on("click", function() {
          var giphyTarget = $(this).attr("data-topic");
          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Y4qlZyj6iyGpwyb1dBVgeqPg87J8D8Zd&q=" +
            giphyTarget + "&limit=50&lang=en";
          console.log("queryURL: " + queryURL);
          $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
    
              clearAll();
    
              var results = response.data;
              var infoText = $("<h2>").addClass("text-white").text(`Here are GIFs of "${giphyTarget}":`);
              var instText = $("<h6>").addClass("text-secondary magic").text(`Click on each GIF to toggle animations!`);
              // var brk = $("<br>");
              $("#infoBar").append(infoText);
              // $("#infoBar").append(brk);
              $("#instText").append(instText);
    
              displayFirstRow(results, giphyTarget);
                  
              $("#moarButton").on("click", function() {
                displaySecondRow(results,giphyTarget);        
              });
    
              $("#masButton").on("click", function() {
                displayThirdRow(results,giphyTarget);
              });          
    
              $("#endButton").on("click", function() {
                $("#popz").modal('show');
    
    
    
              });          
          });
        });
    });
});
