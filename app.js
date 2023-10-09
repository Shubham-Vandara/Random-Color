// Select the element
const btn = document.querySelector("button");
const rgbColor = document.querySelector(".rgb");
const h1 = document.querySelector("h1");
const div = document.querySelector("div");
div.style.textAlign = "center";

// click event on button
btn.addEventListener("click", () => {
  const newColor = makeRandom();
  document.body.style.backgroundColor = newColor;
});

// arrow function
const makeRandom = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  if (r < 128 && (g < 128) & (b < 128)) {
    rgbColor.style.color = "white";
    h1.style.color = "white"
  } else {
    rgbColor.style.color = "black";
    h1.style.color = "black"
  }
  rgbColor.innerText = `RGB (${r}, ${g}, ${b})`;
  return `rgb(${r},${g},${b})`;
};

// function expression

// function makeRandom() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   if (r < 128 && (g < 128) & (b < 128)) {
//     h1.style.color = "white";
//   } else {
//     h1.style.color = "black";
//   }
//   h1.innerText = `RGB (${r}, ${g}, ${b})`;
//   return `rgb(${r},${g},${b})`;
// }
