<?php

if (isset($_POST['submit'])) {
  $bigmac = "Bigmac x".$_POST['bigmac_count'];
  $fries = "Fries Small x".$_POST['fries_count'];
  $cola = "Cola x".$_POST['cola_count'];
  $mcchicken = "McChicken x".$_POST['mcchicken_count'];
  $nuggets = "Nuggets x".$_POST['nuggets_count'];
  $fries2 = "Fries Medium x".$_POST['fries2_count'];
  $fries3 = "Fries Large x".$_POST['fries3_count'];
  $smoothie = "Smoothie x".$_POST['smoothie_count'];
  $tea = "Tea x".$_POST['tea_count'];
  $coffee = "Coffee x".$_POST['coffee_count'];
  $muffin = "Muffin x".$_POST['muffin_count'];
  $totalprice = "Totaal €".$_POST['totalprice'];

  include_once("order_inbound.php");
} else {
  header('location:order.html');
}