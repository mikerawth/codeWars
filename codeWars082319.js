// function rot13(message) {
//   let rot13ReturnArray = [];
//   for (i in message) {
//     let currentCharCode = message.charCodeAt(i)
//     if (currentCharCode >= 65 && currentCharCode <= 77
//       || currentCharCode >= 97 && currentCharCode <= 109) {
//       rot13ReturnArray.push(String.fromCharCode(currentCharCode + 13))
//     } else {
//       rot13ReturnArray.push(String.fromCharCode(65 + 90 - currentCharCode + 13))
//     }
//   }
//   console.log(rot13ReturnArray.join(''))

// }

// rot13('grfg')

// Test.describe("Rot13", function(){
//   Test.it("test", function(){
//     Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
//   })    
//   Test.it("Test", function(){
//     Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
//   })
// })


// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript


function dashatize(num) {

};

// Test.describe("Basic", function(){
//   Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
//   Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
//   Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
//   Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
// });
// Test.describe("Weird", function(){
//   Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
//   Test.assertEquals(dashatize(0), "0", "Should return 0");
//   Test.assertEquals(dashatize(-1), "1", "Should return 1");
//   Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
// });