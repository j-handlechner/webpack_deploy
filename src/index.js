import join from 'lodash/join'; // only import the needed function instead of the whole library
import "./scss/style.scss";
import ImageThisIsFine from "./images/thisisfine.png"


function image() {
  const img = new Image();
  img.src = ImageThisIsFine;

  return img;
}

function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
document.body.appendChild(image());