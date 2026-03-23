$(document).ready(function () {
    sessionStorage.clear();
    var entrar = document.getElementById("entrar");

    entrar.addEventListener("click", function () {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'assets/json/db.json');
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            login(ourData);
        };
        ourRequest.send();
    });

});

function login(data) {
    var nomeUser = document.getElementById("user").value;
    var senhaUser = document.getElementById("pass").value;

    for (i = 0; i < data.user.length; i++) {
        if (nomeUser == data.user[i].username) {
            if (senhaUser == data.user[i].password) {
                checkifnew(data.user[i]);
                console.log("login realizado com sucesso");
                sessionStorage.setItem('id', data.user[i].id);
            } else {
                console.log("senha incorreta");
            }
            i = data.user.length;
            break;
        } else {
            console.log("quantidade de comparações no json");
        }
    }
};

function checkifnew(userdata) {
    if (userdata.software == 0) {
        console.log("start.html");
        window.open("./pages/start.html","_self")
    } else {
        if (userdata.software == 1) {
            console.log("game_ai.html");
            window.open("./pages/game_ai.html","_self")
        } else {
            if (userdata.software == 2) {
                console.log("game_cd.html");
                window.open("./pages/game_cd.html","_self")
            }
        }
    }
}
