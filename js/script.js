// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

//contact form animation
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//image slider
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
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Auto Slide   if you need auto slide ,remove the commit "//"



//var slideIndex = 0;
//showSlides();

//function showSlides() {
   // var i;
   // var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";
   //}
   // slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
    //slides[slideIndex - 1].style.display = "block";
    //setTimeout(showSlides, 2000); // Change image every 2 seconds
//}

