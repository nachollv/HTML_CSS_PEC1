const name = "Herramientas HTML y CSS";
console.log(`Bienvenido a la PEC 1 de ${name}`);


const element = document.querySelector("#enlace");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
  element.classList.add("hoverIn");
  element.classList.remove("hoverOut");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
  element.classList.add("hoverOut");
  element.classList.remove("hoverIn");
});