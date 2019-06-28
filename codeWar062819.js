function dirReduc(inputArray) {
  // function theLoop(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    currentString = inputArray[i];
    nextString = inputArray[i + 1];
    if (
      currentString === "SOUTH" && nextString === "NORTH"
      || currentString === "NORTH" && nextString === "SOUTH"
      || currentString === "EAST" && nextString === "WEST"
      || currentString === "WEST" && nextString === "EAST") {
      inputArray.splice(i, 2);
      dirReduc(inputArray);
    }
  }
}


function namesSorter(departmentsArray) {
  let arr = departmentsArray.toString().split(',');
  arr.sort((x, y) => {
    if (x.length < y.length) {
      return -1;
    }
    if (x.length > y.length) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
  return arr;
}



let whatTimeIsIt = function (angle) {
  let theHour = Math.floor(angle / 30);
  let theMinute = (angle % 30 * 2);
  if (theHour === 0 && theHour === theMinute) { theHour = 12 }
  if (theHour < 10) { theHour = `0${theHour}` }
  if (theMinute < 10) { theMinute = `0${theMinute}` }
  return `${theHour}:${theMinute}`;
}