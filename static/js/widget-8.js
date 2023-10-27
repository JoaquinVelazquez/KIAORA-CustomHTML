flecha = document.querySelectorAll(".flecha-desplegable");
subcategorias = document.querySelectorAll(".subcategorias");

flecha[0].addEventListener("click", function () {
  flecha[0].classList.toggle("rotate");
  subcategorias[0].classList.toggle("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[1].addEventListener("click", function () {
  flecha[1].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.toggle("invisible");
  subcategorias[2].classList.add("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});

flecha[2].addEventListener("click", function () {
  flecha[2].classList.toggle("rotate");
  subcategorias[0].classList.add("invisible");
  subcategorias[1].classList.add("invisible");
  subcategorias[2].classList.toggle("invisible");
  subcategorias[3].classList.add("invisible");
  subcategorias[4].classList.add("invisible");
});