// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialcase =['!','@','#','$','%','^','&','*','(',')']
var numericcase =['1','2','3','4','5','6','7','8','9']

function generatePassword() {
  var userIn = Number(prompt("How many character's will your password be? (Must be between 8 and 128 characters"));
  while (userIn < 8 || userIn >128){ 
    userIn = Number(prompt("You must choose a number between 8 and 128. How many characters would you like?"));  
  }
  console.log(userIn);

  var upper = confirm("Do you want an uppercase letter in your password?");
  var lower = confirm("Do you want a lowercase letter in your password?");
  var special = confirm("Do you want a special character in your password?");
  var numeric = confirm("Do you want a number in your password?");

    while (!upper && !lower && !numeric && !special) {
    alert("You must select at least one character type!");
    upper = confirm("Do you want an uppercase letter in your password?");
    lower = confirm("Do you want a lowercase letter in your password?");
    special = confirm("Do you want a special character in your password?");
    numeric = confirm("Do you want a number in your password?");
    }

  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;
  }  

  var results=[];
  var possibleCharacters=[];
  var guaranteedCharacters=[];

  if (lower) {
    var lower = getRandom(lowercase);
    console.log(lower);
    possibleCharacters=possibleCharacters.concat(lowercase);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandom(lowercase));
    console.log(guaranteedCharacters);

  }
  if (upper) {
    var upper = getRandom(uppercase);
    console.log(upper);
    possibleCharacters=possibleCharacters.concat(uppercase);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandom(uppercase));
    console.log(guaranteedCharacters);
  }
  if (special) {
    var special = getRandom(specialcase);
    console.log(special);
    possibleCharacters=possibleCharacters.concat(specialcase);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandom(specialcase));
    console.log(guaranteedCharacters);
  }
  if (numeric) {
    var numeric = getRandom(numericcase);
    console.log(numeric);
    possibleCharacters=possibleCharacters.concat(numericcase);
    console.log(possibleCharacters);
    guaranteedCharacters.push(getRandom(numericcase));
    console.log(guaranteedCharacters);
  }
 
var possibleCharacters=getRandom(possibleCharacters);
for (i=0; i < userIn.length; i++) {
  results.push(possibleCharacters);
}

var guaranteedCharacters=getRandom(guaranteedCharacters);
for (i=0; i < userIn.length; i++) {
  results.push(guaranteedCharacters);
}
console.log(possibleCharacters);
console.log(guaranteedCharacters);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

