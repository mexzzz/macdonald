<?php

if(isset($_POST['submit'])){
  $naam = $_POST['naam'];
  $studentnummer = $_POST['studentnummer'];
  $klas = $_POST['klas'];
  $ll1 = $_POST['ll1'];
  $cll1 = $_POST['cll1'];
  $ll2 = $_POST['ll2'];
  $cll2 = $_POST['cll2'];
  $ll3 = $_POST['ll3'];
  $cll3 = $_POST['cll3'];
  $ll4 = $_POST['ll4'];
  $cll4 = $_POST['cll4'];

  include_once("index2.php");
} else {
  header('location:order.html');
}

//De $_POST dingen zijn de gegevens die je verstuurd hebt. Die worden gelinked aan de $naam, $studentnummer enz.
//Die stuurt je vervolgens door naar index2.php
