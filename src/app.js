const name = "Herramientas HTML y CSS";
console.log(`Bienvenido a la PEC 3 de ${name}`);
console.time("t1");

const elementList = document.querySelectorAll ("a");
let elementsArr = Array.from(elementList);

elementsArr.forEach(aElement => aElement.addEventListener("mouseover", event => {
  
  aElement.classList.add("hoverIn");
  aElement.classList.remove("hoverOut");
  
}))

elementsArr.forEach(aElement => aElement.addEventListener("mouseout", event => {
  
  aElement.classList.add("hoverOut");
  aElement.classList.remove("hoverIn");

}))


console.log("Ha finalizado la carga de la página.");
console.timeEnd("t1");