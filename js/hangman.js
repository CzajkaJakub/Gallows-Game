const letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O","Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
const backgroundMusic = new Audio("/hangman/music/Phantom Sage - Our Lives Past (feat. Emily Stiles) [NCS Release].mp3");
const yes = new Audio("/hangman/music/True question correct answer sound effect.mp3");
const no = new Audio("/hangman/music/False question incorrect answer sound effect.mp3");
var playingMusic = 0;
var currentPassword = "";
var opacity = 0;
var length;
var password;
var category;
var wrongAttempts = 0;

window.onload = setTimeout("loadPage()", 500);

function loadPage(){
    password = document.getElementById("has").getAttribute("value");
    category = document.getElementById("kat").getAttribute("value");

    length = password.length;
    password = password.toUpperCase();

    setTimeout("appearPage()", 500);
    setTimeout("makeLetters()", 500);
    setTimeout(function (){createUpperLabel(password);}, 100);
}

function appearPage(){
    if(opacity < 101){
        document.getElementById("container").style.opacity = opacity + "%";
        opacity += 2;
        setTimeout("appearPage()", 50);
    }
}

function makeLetters(){
    let alphabet ="";
    for (i=1; i<=35; i++){
        let letter = letters[i-1];
        alphabet += '<div class="letter" onclick="checkletter('+i+')" id="'+letter+'">' + letter + '</div>';
        if (i%7 == 0){
            alphabet += '<div style="clear:both"></div>';
        }
    }
    document.getElementById("alfabet").innerHTML = alphabet;
}

function createUpperLabel(password){
    for (i=0; i<length; i++){
        if (password.charAt(i) == " ") currentPassword += " ";
        else currentPassword += "-";
    }

    document.getElementById('haslo').innerHTML = currentPassword;
    document.getElementById('kategoria').innerHTML = "(" + category + ")";
}


String.prototype.ustawZnak = function(place, mark)
{
    if (place > this.length -1) return this.toString();
    else return this.substr(0, place) + mark + this.substr(place+1);
}

function checkletter(markedLetter){
    let letter = document.getElementById(letters[markedLetter-1]);
    let check = 0;
    if (wrongAttempts < 9){
        for(i=0; i<length; i++){
            if((password.charAt(i)) == (letters[markedLetter-1])){
                currentPassword = currentPassword.ustawZnak(i, letters[markedLetter-1]);
                check = 1;
            }
        }
        markLetter(letter, check);
    }
    if(currentPassword == password){
        document.getElementById('alfabet').innerHTML = 'Gratulacje! Wygrałeś. <div id="reset" onclick="playAgain()">Zagraj jeszcze raz!</div><br>';
    }
    else if(wrongAttempts == 9){
        document.getElementById('haslo').innerHTML = password;
        document.getElementById('alfabet').innerHTML = 'Niestety, przegrałeś. <div id="reset" onclick="playAgain()">Spróbuj jeszcze raz!</div><br>';
    }
}

function markLetter(letter, check){
    if (check == 1){
        yes.play();
        letter.style.border="4px solid green";
        letter.style.color="green";
        letter.style.cursor="default";
        letter.setAttribute("onclick", ";");
        document.getElementById('haslo').innerHTML = currentPassword;
    }else{
        wrongAttempts+=1;
        no.play();
        letter.style.border="4px solid red";
        letter.style.color="red";
        letter.style.cursor="default";
        letter.setAttribute("onclick", ";");
        document.getElementById("szubienica").innerHTML = '<img id="img" src="/hangman/HangmanParts/s' + wrongAttempts +'.jpg" alt="szubienica"></img>';
    }
}

function playmusic(){
    if (playingMusic == 0){
        playingMusic = 1;
        backgroundMusic.play();
    }else{
        playingMusic = 0;
        backgroundMusic.pause();
    }
}

function playAgain(){
    location.href="/hangman/index.html";
}