<form method="post">
    <label>Nome:</label>
    <input type="text" name="nome">
    <label>E-mail:</label>
    <input type="email" name="email">
    <label>Cidade:</label>
    <input type="text" name="cidade">
    <label>Curso:</label>
    <input type="text" name="curso">
    <br>
    <br>
    <button submit="button">Cadastrar</button>
</form>

<?php
    
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $cidade = $_POST["cidade"];
    $curso = $_POST["curso"];
    echo "Nome:",$nome," Email:", $email, " Cidade:", $cidade ," Curso:", $curso;
?>