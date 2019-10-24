// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
  let returnString = '';
  if (names.length == 0) {
    return returnString;
  } else {
    returnString += names[0].name;
    if (names.length > 1) {
      for (let i = 1; i < names.length - 1; i++) {
        returnString += `, ${names[i].name}`;
      }
      returnString += ` & ${names[names.length - 1].name}`;
    }
    return returnString;
  }
}

// console.log(list(['Mark']));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));


// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
// "Must work with many names")
// Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
// "Must work with two names")
// Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
// Test.assertEquals(list([]), '', "Must work with no names")