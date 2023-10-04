// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordString = ""
  random = []
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

let selection = 0

// Character type selector
function selector () {
  selection = Number(Math.floor(Math.random() * 4)) // randomly selects a number 0-3
  return
}

// Character arrays
let array = {
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ['@', "*", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'", "/", "^", "&", "_", "?", "<", ">", ":", "%", "#", "!"],
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

let upperCase = true
let lowerCase = true
let numeric = true
let special = true
let passwordString = ""
let random = []

// User inputs
function generateInput() {
  passwordLength = Number(window.prompt("Insert how many characters your password should be."))
  console.log(passwordLength, "characters")

  if (8 <= passwordLength && passwordLength <= 128) {
    upperCase = window.confirm("Should your password include uppercase letters?")
    console.log("Allow uppercase", upperCase)
    lowerCase = window.confirm("Should your password include lowercase letters?")
    console.log("Allow lowercase", lowerCase)
    numeric = window.confirm("Should your password include numbers?")
    console.log("Allow numbers", numeric)
    special = window.confirm("Should your password include special letters?")
    console.log("Allow special", special)
    generateRandom()
  } else if (passwordLength < 8) {
    window.alert("Your password length must be at least 8 characters")
    generateInput()
        
  } else {
    window.alert("Your password length must have less than 128 characters")
    generateInput()
  }
}

// Creates array of the character types
function generateRandom() {
    x = 0
    while (x < passwordLength) {
      selector()
      random.push(selection)
      x++
    } 
    console.log(random, " starting array")
    characterInclusion()
  }

// Includes all desired character types
function characterInclusion() {
  if (upperCase && !random.includes(0)) {
    random.splice(random[Math.floor(Math.random() * random.length)], 1, 0)
    console.log(random, " added uppercase")
    characterInclusion()
  } else if (lowerCase && !random.includes(1)) {
    random.splice(random[Math.floor(Math.random() * random.length)], 1, 1)
    console.log(random), "added lowercase"
    characterInclusion()
  } else if (numeric && !random.includes(2)) {
    random.splice(random[Math.floor(Math.random() * random.length)], 1, 2)
    console.log(random, " added number")
    characterInclusion()
  }
  else if (special && !random.includes(3)) {
    random.splice(random[Math.floor(Math.random() * random.length)], 1, 3)
    console.log(random, " added special")
    characterInclusion()
  }
  convertPassword()
}

// Converts types array into random characters
function convertPassword() {
  convertUpper()
  console.log(random, "converted uppercase")

  convertLower()
  console.log(random, "converted lowercase")

  convertSpecial()
  console.log(random, "converted numbers")

  convertNumber()
  console.log(random, "converted special")

  passwordString = random.join("")
  console.log(passwordString)
}

function convertUpper() {
  if (random.includes(0)) {
    let upperIndex = random.indexOf(0)
    console.log(upperIndex, "index of uppercase")
    if (upperIndex !== -1) {
      random[upperIndex] = array.upper[Math.floor(Math.random() * array.upper.length)]
      convertUpper()
    }
  }
}

function convertLower() {
  if (random.includes(1)) {
    let lowerIndex = random.indexOf(1)
    console.log(lowerIndex, "index of lowercase")
    if (lowerIndex !== -1) {
      random[lowerIndex] = array.lower[Math.floor(Math.random() * array.lower.length)]
      convertLower()
    }
  } 
}

function convertNumber() {
  if (random.includes(2)) {
    let numberIndex = random.indexOf(2)
    console.log(numberIndex, "index of number")
    if (numberIndex !== -1) {
      random[numberIndex] = array.number[Math.floor(Math.random() * array.number.length)].toString()
      convertNumber()
    }
  } 
}

function convertSpecial() {
  if (random.includes(3)) {
    let specialIndex = random.indexOf(3)
    console.log(specialIndex, "index of special")
    if (specialIndex !== -1) {
      random[specialIndex] = array.special[Math.floor(Math.random() * array.special.length)]
      convertSpecial()
    }
  }
}

// Main function
function generatePassword() {
  generateInput()
  return passwordString
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
