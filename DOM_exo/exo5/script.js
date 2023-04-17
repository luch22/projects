function getRandom() {
  return Math.floor(Math.random() * 256);
}
const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  let sec = document.querySelector(".displayedsquare-wrapper");
  let ul = document.querySelector("ul");
  let cclass = e.target.classList[1];
  let ajout = document.createElement("div");
  let li = document.createElement("li");
  ajout.setAttribute("class", "displayedsquare " + cclass);
  sec.append(ajout);
  li.innerHTML = `[${getElapsedTime()}] Created a new ${cclass} square `;
  ul.append(li);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

document.body.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    document.body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `body background color is ${document.body.style.backgroundColor} `;
    ul.append(li);
  }
  if (event.code === "KeyL") {
    let li = document.querySelectorAll("li");
    li.forEach((element) => {
      element.remove();
    });
  }
  if (event.code === "KeyS") {
    let square = document.querySelectorAll(".displayedsquare");
    square.forEach((element) => {
      element.remove();
    });
  }
});
// const displayAlert = (e) => {
//   console.log(e.target.classList[1]);
//   let lcolor = ["green", "orange", "violet"];
//   if (lcolor.includes(e.target.classList[1])) alert(e.target.classList[1]);
// };

// const squareDisplay = document.querySelectorAll(".displayedsquare-wrapper");
// squareDisplay.forEach((element) => {
//   element.addEventListener("click", displayAlert);
// });

const squareDisplay = document.querySelectorAll(".displayedsquare-wrapper");
squareDisplay.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.classList[1]);
    if (["green", "orange", "violet"].includes(e.target.classList[1]))
      alert(e.target.classList[1]);
  });
});
