String.prototype.ustawZnak = function(place, mark)
{
    if (place > this.length -1) return this.toString();
    else return this.substr(0, place) + mark + this.substr(place+1);
}



function pojawSie(){
    if (opa<100){
        document.getElementById("container").style.opacity = opa +"%";
        opa+=2;
        setTimeout("pojawSie()", 50);
    }else{

        opa=0;
    }
}

function makehaslo(haslo){
    var haslo2="";
    for (i=0; i<dlugosc; i++){
        if (haslo.charAt(i) == " ") haslo2 += " ";
        else haslo2 += "-";
    }
    document.getElementById('haslo').innerHTML = haslo2;
    document.getElementById('kategoria').innerHTML = "(" + kategoria + ")";
    haslo1 = haslo2;
}

function makealfabet(){
    var alfabet ="";
    for (i=1; i<=35; i++){
        var lett = letters[i-1];
        alfabet += '<div class="letter" onclick="checkletter('+i+')" id="'+lett+'">' + lett + '</div>';
        if (i%7 == 0){
            alfabet += '<div style="clear:both"></div>';
        }
    }
    document.getElementById("alfabet").innerHTML = alfabet;
}

function checkletter(x){
    var check = 0;
    if (proba < 9){
        for(i=0; i<dlugosc; i++){
            if((haslo.charAt(i)) == (letters[x-1])){
                haslo1 = haslo1.ustawZnak(i, letters[x-1]);
                check = 1;
            }
        }
        let letter = document.getElementById(letters[x-1]);
        if (check == 1){
            yes.play();
            letter.style.border="4px solid green";
            letter.style.color="green";
            letter.style.cursor="default";
            document.getElementById('haslo').innerHTML = haslo1;
            letter.setAttribute("onclick", ";");
        }else{
            proba+=1;
            no.play();
            letter.style.border="4px solid red";
            letter.style.color="red";
            letter.style.cursor="default";
            letter.setAttribute("onclick", ";");
            document.getElementById("szubienica").innerHTML = '<img id="img" src="HangmanParts/s' + proba +'.jpg" alt="szubienica"></img>';
        }
    }
    if(haslo1 == haslo){
        document.getElementById('alfabet').innerHTML = 'Gratulacje! Wygrałeś. <div id="reset" onclick="reload()">Zagraj jeszcze raz!</div><br>';
    }
    else if(proba == 9){
        document.getElementById('haslo').innerHTML = haslo;
        document.getElementById('alfabet').innerHTML = 'Niestety, przegrałeś. <div id="reset" onclick="reload()">Spróbuj jeszcze raz!</div><br>';
    }

}


function reload(){
    location.href="index.html";
}

function check(){
    haslo = document.getElementById("has").getAttribute("value");
    kategoria = document.getElementById("kat").getAttribute("value");
    dlugosc = haslo.length;
    haslo = haslo.toUpperCase();
    setTimeout("makealfabet()", 500);
    setTimeout(function (){makehaslo(haslo);}, 100);
    setTimeout("pojawSie()", 500);
}

function playmusic(){
    if (mus == 0){
        mus = 1;
        music.play();
    }else{
        mus = 0;
        music.pause();
    }
}

var mus = 0;
var music = new Audio("js/music/Phantom Sage - Our Lives Past (feat. Emily Stiles) [NCS Release].mp3");
var yes = new Audio("js/music/True question correct answer sound effect.mp3");
var no = new Audio("js/music/False question incorrect answer sound effect.mp3");
var proba = 0;
var haslo1;
var letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O","Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];
var opa=0;
var haslo;
var dlugosc;
var kategoria;
window.onload = setTimeout("check()", 500);