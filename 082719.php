<?php 
function sumArray($array) {
  return array_sum($array)-max($array)-min($array);
  }

  function litres($t) {
    return floor($t/2);
  }

  function findNeedle($haystack) {
    for($i=0; $i < count($haystack); $i++){
      if($haystack[$i] == "needle"){
        return "found the needle at position $i";
      }
    }
}
?>