/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector("#theConspiracy").innerHTML = generateConspiracy();
  });
};

let generateConspiracy = () => {
  let firstWho = [
    "Aliens",
    "Russian",
    "American",
    "Iluminati",
    "Deep State",
    "ISIS",
    "Big Pharma",
    "Coporate",
    "Candian",
    "French",
    "German",
    "Chinese",
    "Korean",
    "Egyptian",
    "Indian",
    "Laosian",
    "Georgia",
    "Algerian",
    "Belgium",
    "Congan",
    "Denmarkan",
    "Equadorian",
    "Finish",
    "Hungarian",
    "Iseriali",
    "Austilian",
    "Austrian",
    "Libian",
    "Morocan",
    "Mexican",
    "Nigrian",
    "Peruvian",
    "Sibrian",
    "Tazmanian",
    "Ugalsavian",
    "Venazulian",
    "Welsh",
    "Yemman"
  ];
  let secondWho = [
    "Lizards",
    "Blood Suckers",
    "Radicals",
    "Militas",
    "Leaders",
    "Special Interest Groups",
    "Grimlins",
    "Gorilla Fighters",
    "Baby Eaters",
    "Weaponized Virusus",
    "AI",
    "Military",
    "McDonalds",
    "Nukes",
    "Spies",
    "Hackers",
    "Actors",
    "Media",
    "Propaganda",
    "Oil",
    "Congress",
    "Senate"
  ];
  let action = [
    "are building bombs",
    "are sacraficing children",
    "are keeping POWs",
    "are building a cabal",
    "are conspiracing to take over the world",
    "are turn the frogs gay",
    "are posioning the food supply",
    "are making the deer queer",
    "are writing a manefesto",
    "are forcing citizans to play with figit spinners",
    "are dumbing down the population",
    "are causing overpopulation",
    "are causing underpopulation",
    "are turn our kids into hippies",
    "are preforming human experiantation",
    "are probing citizans"
  ];
  let linking = [
    "on the",
    "in the",
    "near the",
    "on top of",
    "in the middle of"
  ];
  let place = [
    "the moon",
    "Alaska",
    "Area 51",
    "a military Base",
    "the capital",
    "the compound",
    "a prision",
    "a war zone",
    "an atomamous zone",
    "the electrical grid"
  ];

  let firstWhoIndex = Math.floor(Math.random() * firstWho.length);
  let secondWhoIndex = Math.floor(Math.random() * secondWho.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let linkingIndex = Math.floor(Math.random() * linking.length);
  let placeIndex = Math.floor(Math.random() * place.length);

  return (
    firstWho[firstWhoIndex] +
    " " +
    secondWho[secondWhoIndex] +
    " " +
    action[actionIndex] +
    " " +
    linking[linkingIndex] +
    " " +
    place[placeIndex] +
    "."
  );
};
