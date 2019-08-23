


function findRoutes(routes) {
  let resultArray = [];
  let firstArray = [];
  let secondArray = [];

  for (let i = 0; i < routes.length; i++) {
    firstArray.push(routes[i][0]);
    secondArray.push(routes[i][1]);

  }

  // while(firstArray.length > 0) {
  firstArray.forEach((eachCity, i) => {
    if (!secondArray.includes(eachCity)) {
      resultArray.push(eachCity);
      firstArray.splice(i, 1)

    }
  })
  // }

  console.log(firstArray, secondArray)
  return resultArray.join(", ");
}

findRoutes([
  ["Chicago", "Winnipeg"],
  ["Halifax", "Montreal"],
  ["Montreal", "Toronto"],
  ["Toronto", "Chicago"],
  ["Winnipeg", "Seattle"]]);
// "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");