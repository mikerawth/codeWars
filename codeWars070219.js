// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
// 973 ms
function deleteNth(arr, n) {
  let arrChecker = {};
  let l = arr.length;
  let newArr = [];
  for (let i = 0; i < l; i++) {
    if (!(arr[i] in arrChecker))
      arrChecker[arr[i]] = 0;
    if (arrChecker[arr[i]] < n) {
      arrChecker[arr[i]] += 1
      newArr.push(arr[i]);
    }
  }
  return newArr
}

// https://www.codewars.com/kata/54da5a58ea159efa38000836/discuss
//  955ms
function findOdd(a) {
  let x = a.length;
  for (let i = 0; i < x; i++) {
    let c = 0;
    for (let j = 0; j < x; j++) { if (a[i] === a[j]) { c++ } }
    if (c % 2 === 1) { return a[i] }
  }
}