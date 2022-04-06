const name = "Herramientas HTML y CSS";
console.log(`Bienvenido a la PEC 1 de ${name}`);


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

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/* const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} 
      width={image.width} />
    <span>{image.caption}</span>
  </div>
); */

export default MyImage;