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


console.log("Estoy en el final del script.");
console.timeEnd("t1");

//document.querySelector("#main-css").removeAttribute('disabled');