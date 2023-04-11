/*
 */
function getRandom() {
  return Math.floor(Math.random() * 256);
}

for (const item of document.querySelectorAll(".important")) {
  item.setAttribute("title", "This is an important item");
  console.log(item.attributes.title);
}
for (const item of document.querySelectorAll("img")) {
  if (!item.className.includes("important")) {
    item.style.display = "none";
  }
}
for (const item of document.querySelectorAll("p")) {
  if (item.className.length != 0) {
    console.log(item.className);
  } else {
    item.style.color =
      "rgb(" + getRandom() + "," + getRandom() + "," + getRandom() + ")";
  }
  console.log(item.textContent);
}
