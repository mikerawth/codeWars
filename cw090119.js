// https://www.codewars.com/kata/are-they-the-same/train/javascript

function comp(array1, array2) {
  if (array1.length == null || array2.length == null) {
    return false;
  } else {
    let obj = {};
    array1.forEach((number) => {
      if (!(number in obj)) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    })
    array2.forEach((number) => {
      let currNum = Math.sqrt(number);
      if (currNum in obj) {
        obj[currNum] -= 1;
      } else {
        return false;
      }
    })
    for (eachNum in obj) {
      if (obj[eachNum] != 0) {
        return false;
      }
    }
    return true;
  }
}

// best practice 

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}