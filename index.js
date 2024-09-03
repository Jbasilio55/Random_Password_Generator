import { characters } from "./characters.js";

let chArray = characters;

console.log(chArray[2]);

function generatePassword() {
  let password1 = document.getElementById("text1");
  let password2 = document.getElementById("text2");
  let textLength = document.getElementById("chLength").value;

  if (textLength > 21) {
    textLength = 20;
  }

  let text1 = "";
  let text2 = "";

  for (let i = 0; i < textLength; i++) {
    text1 += chArray[Math.floor(Math.random() * chArray.length)];
    text2 += chArray[Math.floor(Math.random() * chArray.length)];
  }

  password1.value = text1;
  password2.value = text2;
}

window.generatePassword = generatePassword;
