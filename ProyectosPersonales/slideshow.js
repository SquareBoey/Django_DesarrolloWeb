var slideIndex = 1;
var timer;

mostrarImagen(slideIndex);

function avanzar(n) {
  mostrarImagen(slideIndex += n);
}

function siguiente() {
  avanzar(1);
}

function anterior() {
  avanzar(-1);
}

function pausar() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(siguiente, 2000);
  }
}

function mostrarImagen(n) {
  var i;
  var slides = document.getElementById("slideshow").getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
