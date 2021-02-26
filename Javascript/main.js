$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

AOS.init({duration: 1700});

var audio = document.getElementById("audio")
var playbutton1 = document.getElementById("playbutton1")
var playbutton2 = document.getElementById("playbutton2")
var enterbutton = document.getElementById("enterbutton")
var typewriter = document.getElementById("typewriter-2")
var intro = document.getElementById("Introduction")
var mustex = document.getElementById("mustex")
var nav = document.getElementById("navigationbar")
var scroll = document.getElementById("scroll")
var testbutton = document.getElementById("test-button")
var body = document.getElementsByTagName("body")[0]



var count = 0;
function playMusic(){

    if(count == 0){
        count = 1;
        audio.play();
        playbutton1.style.backgroundImage = "url(../Images/play.png)";
        playbutton2.style.backgroundImage = "url(../Images/play.png)";
    }
    else{
        count = 0;
        audio.pause(); 
        playbutton1.style.backgroundImage = "url(../Images/pause.png)"; 
        playbutton2.style.backgroundImage = "url(../Images/pause.png)"; 
    }
}

function realPage(){
    
    playbutton1.style.visibility = "hidden";
    typewriter.style.transition = "1s";
    typewriter.style.opacity = "0";
    nav.style.opacity = "1";
    scroll.style.opacity = "1";
    enterbutton.style.display = "none";
    mustex.style.display= "none";
    intro.style.background = "url(../Images/img-2.gif) no-repeat center";
    body.style.backgroundColor = "black"; 
    body.style.overflow = "visible"
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}




