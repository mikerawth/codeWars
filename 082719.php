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


// mens to boys https://www.codewars.com/kata/5af15a37de4c7f223e00012d/
function menFromBoys($arr) {
  $evens = array();
  $odds = array();
  foreach($arr as $int){
    if($int % 2 == 0 && !in_array($int,$evens)){
      array_push($evens, $int);
    } elseif($int % 2 != 0 && !in_array($int,$odds)) {
      array_push($odds, $int);
    }
  }
  sort($evens);
  rsort($odds);
  return array_merge($evens,$odds);
}

//best practice
function menFromBoys($arr) {
  $arrs=array_unique($arr);
    foreach($arrs as $arry){
    if($arry%2 ==0){$even[]=$arry;}else{$odd[]=$arry;};}
    sort($even);rsort($odd);
   $end=array_merge($even,$odd);
    return $end;
  }



  
?>