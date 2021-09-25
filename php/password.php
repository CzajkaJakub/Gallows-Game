<?php

    if (!isset($_POST["kat"])){
        header('Location: /hangman/index.html');
        exit();
    }

    session_start();
    require_once "database.php";
    $wybranoKat = 0;
    $polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);

    if ($polaczenie->connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{
        $kategoria = $_POST["kat"];
        $i = rand(1, 10);

        if ($kategoria == "Losuj hasło wraz z kategorią"){
            $i = rand(1, 100);
            $wybranoKat = 1;
            if ($rezultat = @$polaczenie->query(
                sprintf("SELECT * FROM wisielec WHERE id='%s'",
                mysqli_real_escape_string($polaczenie,$i))))
                {
                    $wiersz = $rezultat->fetch_assoc();

                    $_SESSION['kategoria'] = $wiersz['kategoria'];
                    $_SESSION['haslo'] = $wiersz['haslo'];
                    $_SESSION['wybrano'] = true;

                    $polaczenie->close();
                    header('Location: wisielec.php');
                }
        }
        else if ($rezultat = @$polaczenie->query(
            sprintf("SELECT * FROM wisielec WHERE kategoria='%s' AND id_kat='%s'",
            mysqli_real_escape_string($polaczenie,$kategoria),
            mysqli_real_escape_string($polaczenie,$i))))
            {
                $wybranoKat = 1;
                $wiersz = $rezultat->fetch_assoc();

                $_SESSION['kategoria'] = $wiersz['kategoria'];
                $_SESSION['haslo'] = $wiersz['haslo'];
                $_SESSION['wybrano'] = true;

                $polaczenie->close();
                header('Location: wisielec.php');
            }
        }
?>