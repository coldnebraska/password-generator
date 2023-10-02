// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Character type selector
function selector () {
  return Math.floor(Math.random() * 4) // randomly selects a number 0-3
}

// Character arrays
let array = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ['@', "*", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'", "/"],
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

let passwordString = ""
function generatePassword () {
  passwordLength = Number(window.prompt("Insert how many characters your password should be."))
  console.log(passwordLength, "characters")

  if (8 <= passwordLength && passwordLength <= 128) {
    let upperCase = window.confirm("Should your password include uppercase letters?")
    console.log("Allow uppercase", upperCase)
    let lowerCase = window.confirm("Should your password include lowercase letters?")
    console.log("Allow lowercase", lowerCase)
    let numeric = window.confirm("Should your password include numbers?")
    console.log("Allow numbers", numeric)
    let special = window.confirm("Should your password include special letters?")
    console.log("Allow special", special)

    // Password generation
    
    x = 0
    while (x < passwordLength) {

      // Character will be uppercase
      if (selector() == 0 && upperCase === true) {
        let upperChoice = array.upper[Math.floor(Math.random() * array.upper.length)]
        passwordString += upperChoice
        console.log(upperChoice)
        x++
      } else {
        selector()
      }

      // Character will be lowercase
      if (selector() == 1 && lowerCase === true) {
        let lowerChoice = array.lower[Math.floor(Math.random() * array.lower.length)]
        passwordString += lowerChoice
        console.log(lowerChoice)
        x++
      } else {
        selector()
      }

      // Character will be a number
      if (selector() == 2 && numeric === true) {
        let numericChoice = array.number[Math.floor(Math.random() * array.number.length)]
        passwordString += numericChoice
        console.log(numericChoice)
        x++
      } else {
        selector()
      }

      // Character will be a special character
      if (selector() == 3 && special === true) {
        let specialChoice = array.special[Math.floor(Math.random() * array.special.length)]
        passwordString += specialChoice
        console.log(specialChoice)
        x++
      } else {
        selector()
      }
    }
  } else if (passwordLength < 8) {
    window.alert("Your password length must be at least 8 characters")
    generatePassword()

  } else {
    window.alert("Your password length must have less than 128 characters")
    generatePassword()
  }
  console.log (passwordString)
  return passwordString

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
