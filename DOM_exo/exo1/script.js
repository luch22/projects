/*
 */

function getRandom() {
  return Math.floor(Math.random() * 256);
}

console.log(document.title);
console.log(getRandom());

document.title = "Ceci est le titre";

document.body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;

console.log(document.body.style.backgroundColor);
console.log(document.title);

for (const item of document.body.children) {
  console.log(item.tagName);
}
