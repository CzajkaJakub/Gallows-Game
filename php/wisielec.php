<?php
    session_start();
    if (!isset($_SESSION['wybrano'])){
        header('Location:/index.html');
        exit();
    }
?>


<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/hangman.css" type="text/css">
    <link rel="shortcut icon" href="/ico/ico.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap" rel="stylesheet">
    <script type="text/javascript" src="/js/hangman.js"></script>

    <title>Hangman Game</title>
</head>

<body>
    <div id="container">
        <header>
            <h1 id="haslo"></h1>
            <span id="kategoria"></span>
        </header>
        <section id="content">
            <aside id="szubienica">
                <img id='img' src="/HangmanParts\s0.jpg" alt="szubienica">
            </aside>
            <div id="alfabet"></div>
        </section>
        <footer id="footer">
            <a target="_blank" href="https://czajkajakub.pl"><img id="img2" src="/ico/portfolio.png" alt="Portfolio image"></a>
            © 2021 All rights reserved.
            <img id="img3" src="/img/music-2-48.png" onclick="playmusic()">
        </footer>
    </div>
    <div id="has" value="<?php echo $_SESSION['haslo'];?>"></div>
    <div id="kat" value="<?php echo $_SESSION['kategoria'];?>"></div>
</body>
</html>