function comp(array1, array2) {
  if (array1.length == 0 || array2.length == 0) {
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