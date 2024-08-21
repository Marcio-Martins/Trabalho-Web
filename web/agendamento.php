<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = $_POST['data'];
    $horario = $_POST['horario'];
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    $sql = "INSERT INTO agendamentos (data, horario, nome, email, telefone) VALUES ('$data', '$horario', '$nome', '$email', '$telefone')";

    if ($conn->query($sql) === TRUE) {
        echo "Agendamento realizado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
