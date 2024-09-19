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
let nouns = ["jogger", "racoon", "ofus", "cuentame", "puedes"];
let extensions = ["com", "me", "es", "us"];

pronouns.forEach(pronoun => {
  adjs.forEach(adj => {
    nouns.forEach(noun => {
      extensions.forEach(ext => {
        mainArray.push(`<li> ${pronoun}${adj}${noun}.${ext} </li>`);
        if (noun.endsWith(ext)) {
          mainArray.push(
            `<li> ${pronoun}${adj}${noun.slice(0, -2)}.${ext} </li>`
          );
        }
      });
    });
  });
});

let list = (document.getElementById("domain-names").innerHTML = mainArray.join(
  " "
));
