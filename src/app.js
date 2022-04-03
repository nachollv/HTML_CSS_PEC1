const name = "Herramientas HTML y CSS";
console.log(`Bienvenido a la PEC 1 de ${name}`);


const elementList = document.querySelectorAll ("a");
let elementsArr = Array.from(elementList);

elementsArr.forEach(aElement => aElement.addEventListener("mouseover", event => {
  console.log("Mouse in");
  aElement.classList.add("hoverIn");
  aElement.classList.remove("hoverOut");
}))

elementsArr.forEach(aElement => aElement.addEventListener("mouseout", event => {
  console.log("Mouse out");
  aElement.classList.add("hoverOut");
  aElement.classList.remove("hoverIn");
}))