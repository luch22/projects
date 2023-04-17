// const ol = document.querySelector("ol");
// ol.insertBefore(ol.children[4], ol.children[0]);
// console.log(ol.children[4]);

// const s3 = document.querySelectorAll("section")[2];
// const h2_3 = s3.querySelector("h2");

// const s2 = document.querySelectorAll("section")[1];
// const h2_2 = s2.querySelector("h2");

// s3.appendChild(h2_2);
// s2.appendChild(h2_3);

const main = document.querySelector("main");

main.children[1].appendChild(main.children[2].querySelector("h2"));
main.children[2].appendChild(main.children[1].querySelector("h2"));

// console.log(s3);
// console.log(s2);

// console.log(main.children[1]);
// console.log(main.children[2]);
// console.log(main.children[2]);

// main.children[2].remove();
