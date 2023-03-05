var login = document.getElementById('opening_ment');
var login = document.getElementById('opening_ment');

function onLogin1() {
    if(login.innerHTML == 'Welcome Green Pet') {
        login.innerHTML = 'You are already our member!';
    }
}

function onLogin2() {
    if(login.innerHTML == 'You are already our member!') {
        login.innerHTML = 'Welcome Green Pet';
    }
}

function onJoin1() {
    if(login.innerHTML == 'Welcome Green Pet') {
        login.innerHTML = 'Welcome to Green Pet World!!';
    }
}

function onJoin2() {
    if(login.innerHTML == 'Welcome to Green Pet World!!') {
        login.innerHTML = 'Welcome Green Pet';
    }
}


