function rot13(message) {
  let rot13ReturnArray = [];
  for (i in message) {
    let currentCharCode = message.charCodeAt(i)
    if (currentCharCode >= 65 && currentCharCode <= 77
      || currentCharCode >= 97 && currentCharCode <= 109) {
      rot13ReturnArray.push(String.fromCharCode(currentCharCode + 13))
    } else {
      rot13ReturnArray.push(String.fromCharCode(65 + 90 - currentCharCode + 13))
    }
  }
  console.log(rot13ReturnArray.join(''))

}

rot13('grfg')

// Test.describe("Rot13", function(){
//   Test.it("test", function(){
//     Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
//   })    
//   Test.it("Test", function(){
//     Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
//   })
// })