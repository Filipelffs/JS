<form method="post">
    <label>Nome:</label>
    <input type="text" name="nome">
    <label>Idade:</label>
    <input type="number" name="num">
    <label>Curso:</label>
    <input type="text" name="curso">
    <br>
    <br>
    <button submit="button">Enviar</button>
</form>

<?php
    
    $nome = $_POST["nome"];
    $num = $_POST["num"];
    $curso = $_POST["curso"];
    echo "Nome:",$nome," Idade:", $num, " Curso:", $curso;
?>