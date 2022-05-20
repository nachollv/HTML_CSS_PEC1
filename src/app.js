const name = "Herramientas HTML y CSS";
console.log(`Bienvenido a la PEC 2 de ${name}`);


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


alert ("Bienvenido a la PEC 3 de la asignatura de HTML y CSS")