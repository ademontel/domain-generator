/*eslint-disable */
import "bootstrap";
import "./style.css";

/*
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
*/

let mainArray = [];

let pronouns = ["the", "our"];
let adjs = ["great", "big", "last"];
let nouns = ["jogger", "racoon", "of"];
let tlds = [".com", ".me", ".ed", ".us"];

pronouns.forEach(pronoun => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      tlds.forEach(tld => {
        mainArray.push(`<li> ${pronoun}${adj}${noun}${tld} </li>`);
      });
    });
  });
});

let list = (document.getElementById("domain-names").innerHTML = mainArray.join(
  " "
));
