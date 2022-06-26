console.log("assignment");
console.log("=============");
// 1
const country = "India";
const continent = "Asia";
let population = 1380;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
language = "Hindi";
console.log(typeof language);

//4
let halfPopulation = population / 2;
console.log(halfPopulation);
population += 1;
console.log(population);
let populationOfFinland = 6;
const moreThanFinland = population > populationOfFinland;
console.log("moreThanFinland = " + moreThanFinland);
let avg_Country = 33;
const lessThanAvg = avg_Country < population;
let description =
  "'" +
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  "'";
console.log(description);

description = `'${country} is in ${continent}, and its ${population} million people speak ${language}'`;
console.log(description);

if (lessThanAvg) console.log(`${country}'s population is above average`);
else
  console.log(`${country}'s population is ${population} million below average`);
/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" > 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

console.log(5 + 6 + "4");
console.log(9 - 4 - 2);

("use strict");

let numNeighbours = Number(
  prompt("How many countries does your country have?")
);

if (numNeighbours === 1) console.log(`Only 1 border!`);
else if (numNeighbours > 1) console.log(`More than 1 border`);
else console.log("No borders");
*/
if (language === "English" && population < 50 && !isIsland)
  console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great Language too :D");
}

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

let arr = [1, 2, 3, 4];
console.log(arr);

var cat = { name: "Atheera" };
function swap(far) {
  far.name = "Farsana";
  far = { name: "FR" };
}
swap(cat);
console.log(cat);
