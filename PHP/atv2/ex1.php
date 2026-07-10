<form method="get">
    <label>Nome:</label>
    <input type="text" name="nome">
    <label>Email:</label>
    <input type="email" name="email">
    <br>
    <br>
    <button submit="button">Enviar</button>
</form>

<?php
    
    $nome = $_GET["nome"];
    $email = $_GET["email"];
    echo "Nome:",$nome," Email:", $email;
?>