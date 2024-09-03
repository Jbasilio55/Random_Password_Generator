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

function copyPassword1() {
  let password1 = document.getElementById("text1");
  password1.select();
  navigator.clipboard.writeText(password1.value);

  if (password1.value.length < 1) {
    alert("Please enter a password length and generate a password.");
  } else {
    alert("Copied the text: " + password1.value);
  }
}

function copyPassword2() {
  let password2 = document.getElementById("text2");
  password2.select();
  navigator.clipboard.writeText(password2.value);

  if (password2.value.length < 1) {
    alert("Please enter a password length and generate a password.");
  } else {
    alert("Copied the text: " + password2.value);
  }
}

window.generatePassword = generatePassword;
window.copyPassword1 = copyPassword1;
window.copyPassword2 = copyPassword2;
