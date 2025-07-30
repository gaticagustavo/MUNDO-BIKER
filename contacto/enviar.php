<?php
$destino="gustavo.gil664@gmail.com";
$nombre=$_POST["nombre"];
$correo=$_POST["correo"];
$telefono=$_POST["telefono"];
$mensaje=$_POST["mensaje"];
$contenido="nombre:".$nombre. "/ncorreo: " .$correo ."/telefono: ".$telefono."/nmensaje:" .$mensaje;
mail($destino,"contacto",$contenido);

?>