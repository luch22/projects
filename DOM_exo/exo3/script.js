/*
 */
function getRandom() {
  return Math.floor(Math.random() * 256);
}

let myarray = [
  "Joddie",
  "Alexandra",
  "Julien",
  "Delphine",
  "Louka",
  "Loic",
  "Luciano",
  "Ethan",
  "Anthony",
  "Benjamin",
  "Nikko",
  "Thomas",
  "Marine",
  "Bruno",
  "Abel",
  "Emilien",
  "Ismaël",
  "Steve",
  "noa",
  "Sylvain",
  "willy",
];
let n = myarray.length;
// let randomIndex = Math.floor(Math.random() * (n + 1)); // generate random index including the end of the array

for (let i = n - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // generate random index to swap with
  [myarray[i], myarray[j]] = [myarray[j], myarray[i]]; // swap elements at indices i and j
}

let article = document.querySelector("article");
myarray.forEach;

myarray.forEach((i) => {
  let section = document.createElement("section");
  let paragraphe = document.createElement("p");
  paragraphe.textContent = i;
  section.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;

  var rgbValues = section.style.backgroundColor
    .replace("rgb(", "")
    .replace(")", "")
    .split(", ");
  let bright =
    (rgbValues[0] * 299 + rgbValues[1] * 587 + rgbValues[2] * 114) / 1000;
  console.log(bright);
  if (bright < 128) {
    paragraphe.style.color = "white";
  }
  console.log(rgbValues);
  article.append(section);
  section.append(paragraphe);
});
