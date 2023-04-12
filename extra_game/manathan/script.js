function manhattan(strA, aveA, strB, AveB) {
  return Math.abs(strA + aveA - (strB + AveB));
}
// let a1 = parseInt(prompt("as"));
// let a2 = parseInt(prompt("av"));
// let b1 = parseInt(prompt("bs"));
// let b2 = parseInt(prompt("bv"));
let array = [1, "2", 3, "4"];

console.log(manhattan(1, 1, 2, 2));
console.log(manhattan(1, 1, 1, 1));
console.log(manhattan(5, 4, 3, 2));
console.log(manhattan(2, 3, 9, 10));
console.log(array);
// console.log(a1, a2, b1, b2);
// console.log(manhattan(a1, a2, b1, b2));
array.fill("DU TEXT");
let myvar = "Z" + "E" + "Z";
console.log(myvar);
console.log("ZEZ");

if ("Z" + "E" + "Z" == "ZEZ") {
  console.log("LA Réponse est Oui");
}
