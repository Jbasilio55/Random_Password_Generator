import { characters } from "./characters.js";

let chArray = characters;

console.log(chArray[2]);

function nightLightMode() {
  let main_El = document.querySelector(".main");
  let h1_El = document.querySelector("h1");
  let h2_El = document.querySelector("h2");
  let span_El = document.querySelector(".night-span");
  let hr_El = document.querySelector("hr");

  if (main_El.hasAttribute("id")) {
    main_El.removeAttribute("id");
    h1_El.removeAttribute("id");
    h2_El.removeAttribute("id");
    span_El.removeAttribute("id");
    hr_El.removeAttribute("id");
  } else {
    main_El.setAttribute("id", "main");
    h1_El.setAttribute("id", "h1-El");
    h2_El.setAttribute("id", "h2-El");
    span_El.setAttribute("id", "span-lt");
    hr_El.setAttribute("id", "hr");
  }
}

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
window.nightLightMode = nightLightMode;
