<?php

if(isset($_POST['submit'])){
  $totalprice = $_POST['totalprice'];
  $bigmac_count = "Bigmac x".$_POST['bigmac_count'];

  include_once("order_inbound.php");
} else {
  header('location:order.html');
}

//De $_POST dingen zijn de gegevens die je verstuurd hebt. Die worden gelinked aan de $naam, $studentnummer enz.
//Die stuurt je vervolgens door naar index2.php
