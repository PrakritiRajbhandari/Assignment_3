// Assignment Code

//unique password generator
function generatePassword(length) {
  var chooseLength = prompt("Enter the length for password ");
  var chooseUpperChar = confirm("Do you want to add UpperCase Characters?");
  var chooseLowerchar = confirm("Do you want to add LowerCase Characters?");
  var chooseNumber = confirm("Do you want to add Numbers?");
  var chooseSymbole = confirm("Do you want to add Symboles?");

  var result = "";
  var allChatacters =
    "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var Numbers = "1234567890";
  var symbole = "!@#$%^&*()_+";
  var LowercasenumbersEl = "abcdefghijklmnopqrstuvwxyz1234567890";
  var LNS = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  var ULS = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+";
  var ULN = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890";
  var UN = "ABCDEFGHIJKLMNOPQRSTUVWZYZ1234567890";
  var US = "ABCDEFGHIJKLMNOPQRSTUVWZYZ@#$%^&*()_+";
  var UL = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz";
  var LS = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

  //for all character choose

  if (
    chooseUpperChar == true &&
    chooseLowerchar == true &&
    chooseNumber == true &&
    chooseSymbole == true
  ) {
    var charactersLength = allChatacters.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += allChatacters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        console.log("Enter a number");
      }
    }
  }

  //for all lower and number choose
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == true &&
    chooseNumber == true
  ) {
    var charactersLength = LNS.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += LNS.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }

  //for all lower, number and symbole choose
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == true &&
    chooseNumber == true &&
    chooseSymbole == true
  ) {
    var charactersLength = LowercasenumbersEl.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += LowercasenumbersEl.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper and lower
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == true &&
    chooseNumber == false &&
    chooseSymbole == false
  ) {
    var charactersLength = UL.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += UL.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper and lower and symbole
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == true &&
    chooseNumber == false &&
    chooseSymbole == true
  ) {
    var charactersLength = ULS.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += ULS.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper and lower and number
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == true &&
    chooseNumber == true &&
    chooseSymbole == false
  ) {
    var charactersLength = ULN.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += ULN.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper and number and number
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == false &&
    chooseNumber == true &&
    chooseSymbole == false
  ) {
    var charactersLength = UN.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += UN.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper and symbole and number
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == false &&
    chooseNumber == false &&
    chooseSymbole == true
  ) {
    var charactersLength = US.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += US.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all lower and symbole and number
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == false &&
    chooseNumber == false &&
    chooseSymbole == true
  ) {
    var charactersLength = LS.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += LS.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all upper
  else if (
    chooseUpperChar == true &&
    chooseLowerchar == false &&
    chooseNumber == false &&
    chooseSymbole == false
  ) {
    var charactersLength = UpperCase.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += UpperCase.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all Lower
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == true &&
    chooseNumber == false &&
    chooseSymbole == false
  ) {
    var charactersLength = LowerCase.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += LowerCase.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        console.log("Enter a number");
      }
    }
  }
  //for all symbole
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == false &&
    chooseNumber == false &&
    chooseSymbole == true
  ) {
    var charactersLength = symbole.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += symbole.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }

  //for all number
  else if (
    chooseUpperChar == false &&
    chooseLowerchar == false &&
    chooseNumber == true &&
    chooseSymbole == false
  ) {
    var charactersLength = Numbers.length;

    for (var i = 0; i < chooseLength; i++) {
      if (chooseLength != null) {
        result += Numbers.charAt(Math.floor(Math.random() * charactersLength));
      } else {
        console.log("Enter a number");
      }
    }
  }

  return result;
}

///

///
//Button onclick
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
