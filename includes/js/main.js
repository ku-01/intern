
together();
function together(){
  changeActive();
}

function changeActive(){
  var header = document.getElementById("serving");
  var btns = header.getElementsByClassName("button-select");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      
      var serve = document.getElementsByClassName("active")[0].getAttribute("name");
      var plan = document.getElementById("customSwitches").checked;
      var lollipop = document.getElementById("lollipop-price");
      var icecandy = document.getElementById("icecandy-price");
      var saving = document.getElementById("saved-price");
      if(plan){
        lollipop.innerHTML = "$" + 1*serve;
        icecandy.innerHTML = "$" + 2*serve;
        saving.innerHTML = "$" + (2*serve - 1*serve);
      }
      else{
        lollipop.innerHTML = "$" + .5*serve;
        icecandy.innerHTML = "$" + 1*serve;
        saving.innerHTML = "$" + (1*serve - .5*serve);
      }
      var subtext = document.getElementsByClassName("sub-text");
      subtext[0].innerHTML = "For " + serve + " serving" ;
      subtext[1].innerHTML = "For " + serve + " serving" ;
       
    });
    document.getElementById("customSwitches").addEventListener("click", function() {
      
      var serve = document.getElementsByClassName("active")[0].getAttribute("name");
      var plan = document.getElementById("customSwitches").checked;
      var lollipop = document.getElementById("lollipop-price");
      var icecandy = document.getElementById("icecandy-price");
      var saving = document.getElementById("saved-price");
      if(plan){
        lollipop.innerHTML = "$" + 1*serve;
        icecandy.innerHTML = "$" + 2*serve;
        saving.innerHTML = "$" + (2*serve - 1*serve);
      }
      else{
        lollipop.innerHTML = "$" + .5*serve;
        icecandy.innerHTML = "$" + 1*serve;
        saving.innerHTML = "$" (1*serve - .5*serve);
      }
      var subtext = document.getElementsByClassName("sub-text");
      subtext[0].innerHTML = "For " + serve + " serving" ;
      subtext[1].innerHTML = "For " + serve + " serving" ;
    });
  } 
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
  var slides = document.getElementsByClassName("mySlides1");

  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active1";
}
