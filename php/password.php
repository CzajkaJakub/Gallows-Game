<?php

    if (!isset($_POST["kat"])){
        header('Location: /index.html');
        exit();
    }

    session_start();
    $wybranoKat = 0;
    $polaczenie = pg_connect("host=ec2-52-4-104-184.compute-1.amazonaws.com dbname=d9dme1ks9pmel2 user=ogxrjrgcejsgce password=df07a60e628a868830096f5e3707e6cae77b44290a067f9802cdbf99940b79e1");
    $kategoria = $_POST["kat"];
    $i = rand(1, 10);

/**
 * @param $rezultat
 * @param $polaczenie
 * @return void
 */
function extracted($rezultat, $polaczenie)
{
    $wiersz = pg_fetch_object($rezultat);
    $_SESSION['kategoria'] = $wiersz->kategoria;
    $_SESSION['haslo'] = $wiersz->haslo;
    $_SESSION['wybrano'] = true;

    echo $_SESSION['kategoria'];
    echo $_SESSION['haslo'];

    pg_close($polaczenie);
    header('Location: wisielec.php');
}

if ($kategoria == "Losuj hasło wraz z kategorią"){
        $i = rand(1, 100);
        $wybranoKat = 1;

        if ($rezultat = pg_query($polaczenie, sprintf("SELECT * FROM wisielec where id = '%s'",
            pg_escape_string($polaczenie,$i))))
        {
            extracted($rezultat, $polaczenie);
        }
    }
    else if ($rezultat = pg_query($polaczenie, sprintf("SELECT * FROM wisielec WHERE kategoria='%s' AND id_kat='%s'",
            pg_escape_string($polaczenie,$kategoria),
            pg_escape_string($polaczenie,$i))))
        {
            extracted($rezultat, $polaczenie);
        }
