<?php
$servername = "localhost:3307";
$username = "root";
$password = "6815";
$dbname = "consultorio_odontologico";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
