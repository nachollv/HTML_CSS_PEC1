import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));

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

var items = [
  {
      src: 'path/to/image1.jpg', // path to image
      title: 'Image Caption 1' // If you skip it, there will display the original image name(image1)
  },
  {
      src: 'path/to/image2.jpg',
      title: 'Image Caption 2'
  }
];

// define options (if needed)
var options = {
  // optionName: 'option value'
  // for example:
  index: 0 // this option means you will start at first image
};

// Initialize the plugin
var viewer = new PhotoViewer(items, options);