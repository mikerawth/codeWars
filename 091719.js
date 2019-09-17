function ChangeMaker(price, payment) {
  let customerPaymentTotal = 0;
  payment.forEach((eachAmt) => {
    customerPaymentTotal += (eachAmt * 100);
  });
  customerPaymentTotal -= price * 100;
  let intArr = [0, 0, 0, 0];
  if (customerPaymentTotal >= 25) {
    intArr[3] = Math.floor(customerPaymentTotal / 25);
    console.log(customerPaymentTotal);
    customerPaymentTotal = customerPaymentTotal % 25;
    console.log(customerPaymentTotal);
  }
  if (customerPaymentTotal >= 10) {
    intArr[2] = Math.floor(customerPaymentTotal / 10);
    customerPaymentTotal = customerPaymentTotal % 10;
    console.log(customerPaymentTotal);
  }
  if (customerPaymentTotal >= 5) {
    intArr[1] = Math.floor(customerPaymentTotal / 5);
    customerPaymentTotal = customerPaymentTotal % 5;
    console.log(customerPaymentTotal);
  }
  intArr[0] = customerPaymentTotal;
  console.log(customerPaymentTotal);
  return intArr;
}