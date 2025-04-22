<?php

if(isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['phone']);
    $mensagem = addslashes($_POST['message']);
    
    $to = "contato@exemple.com.br";
    $subject = "Contato - Pincinato Dollo";
    $body = "Nome:".$nome."\r\n".
            "E-mail:".$email."\r\n".
            "Telefone:".$telefone."\r\n".
            "Mensagem:".$mensagem;
    $header = "From:contato@exemple.com.br"."\r\n".
              "Reply-To:".$email."\r\n".
              "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("O E-mail não pode ser enviado.");
    }
}

?>
