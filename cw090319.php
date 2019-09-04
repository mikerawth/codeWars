<?php 
function positive_sum($arr) {
  $val = 0;
  foreach($arr as $int){
    if($int > 0){
      $val += $int;
    }
  }
  return $val;
}
?>