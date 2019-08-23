// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
// 930 ms
decodeMorse = function (morseCode) {
  return morseCode.trim().split("  ").map((eachArray) => {
    return eachArray.split(" ").map((eachLetter) => {
      return MORSE_CODE[eachLetter];
    }).join("")
  }).join(" ")
}

// Best practice solution
// decodeMorse = function(morseCode){
//   function decodeMorseLetter(letter) {
//     return MORSE_CODE[letter];
//   }
//   function decodeMorseWord(word) {
//     return word.split(' ').map(decodeMorseLetter).join('');
//   }
//   return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }

// my solution
function createPhoneNumber(n) {
  let string = ""
  let length = n.length;
  for (let i = 0; i < length; i++) {
    switch (i) {
      case 0:
        string += `(${n[i]}`
        break;
      case 3:
        string += `) ${n[i]}`
        break;
      case 6:
        string += `-${n[i]}`
        break;
      default:
        string += `${n[i]}`
        break;
    }
  }
  return string;
}
// best solution
// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') ' 
//       + numbers.substring(3, 6) 
//       + '-' 
//       + numbers.substring(6);
// }

function duplicateEncode(word) {
  let letterCheck = {};
  word.toLowerCase().split("").forEach((eachLetter) => {
    if (!(eachLetter in letterCheck)) {
      letterCheck[eachLetter] = 0;
    } else {
      letterCheck[eachLetter] = 1;
    }
  })
  return word.toLowerCase().split("").map((eachLetter) => {
    if (letterCheck[eachLetter] === 0) {
      return "("
    } else {
      return ")"
    }
  }).join("")
}

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }