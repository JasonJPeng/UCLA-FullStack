
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];
var switchIntervalId;
var count = 0;

$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);


function displayImage(source, size) {
  $("#image-holder").html("<img src=" + source + " width='" + size + "px'>");
}


function startSlideshow() {
  switchIntervalId = setInterval(function() {
    displayImage('images/loading.gif',200);
    setTimeout(function() {
      count = ++count % images.length;
      displayImage(images[count],400);
    },1000);
  }, 3000);

}

function stopSlideshow() {
  clearInterval(switchIntervalId);
}

displayImage(images[0],400);
