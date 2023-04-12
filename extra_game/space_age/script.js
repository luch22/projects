function spaceAge(age, planete) {
  let spaceTime = age;

  switch (planete) {
    case "Mercury":
      spaceTime = spaceTime / 0.2408467;
      break;
    case "Venus":
      spaceTime = spaceTime / 0.61519726;
      break;
    case "Mars":
      spaceTime = spaceTime / 1.8808158;
      break;
    case "Jupiter":
      spaceTime = spaceTime / 11.862615;
      break;

    default:
      break;
  }
  return spaceTime;
}
let x = true;
let planete;
let planetes = ["Jupiter", "Mars", "Venus", "Mercury"];
console.log(planetes);

while (x) {
  planete = prompt(
    "Sur quelle planete voulez vous connaitre votre age? (Jupiter, Mars, Venus,Mercury)"
  );
  if (!planetes.includes(planete)) {
    alert("mauvaise réponse réessaie");
    console.log("test1");
  } else x = false;
}
console.log(planete);
let age = prompt("Quel est votre age ?");

console.log(Math.floor(spaceAge(age, planete)) + " an(s)");
alert(Math.floor(spaceAge(age, planete)) + " an(s)");
