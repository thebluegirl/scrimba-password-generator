//object containing all characters for password generation
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

// declare password elements from HTML file
let password1 = document.getElementById("password1"),
    password2 = document.getElementById("password2")

//Declare functions to generate password.
// These functions (2) must:
//     1. Select a random item from character object
//     2. Add the random item to password string until the string is/are 15 caharacters long

function generatePassword() {
    password1.textContent = "";
    for (let a = 0; a < 15; a++) {
        password1.textContent += randomChar();
    }

    password2.textContent = "";
    for (let b = 0; b < 15; b++) {
      password2.textContent += randomChar();
    }
}

function randomChar() {
  let i = Math.floor(Math.random() * characters.length);
  return characters[i];
}