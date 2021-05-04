function checknum(){
    number = document.getElementById('pole').value;
    if (number >0 && number < 10){
        localStorage.setItem('hnumber', number);
        location.href="wisielec.html";
    }else{
        alert('Podano błędne dane, spróbuj ponownie!')
    }
}


