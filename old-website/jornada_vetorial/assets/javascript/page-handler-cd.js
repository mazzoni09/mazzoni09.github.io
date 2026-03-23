$(window).on('load', function () {
    $(".alinhar_modulos").css({
        'width': ($("#treee").innerWidth() + 'px')
    });

});

$(document).ready(function () {

    $(window).resize(larg);

    function larg() {
        $(".alinhar_modulos").css({
            'width': ($("#treee").innerWidth() + 'px')
        });

    }


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../assets/json/db.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        checkid(ourData);
    };
    ourRequest.send();

    function canProceed() {
        var ourSecondRequest = new XMLHttpRequest();
        ourSecondRequest.open('GET', '../assets/json/desafio-cd.json');
        ourSecondRequest.onload = function () {
            var ourData = JSON.parse(ourSecondRequest.responseText);
            loadContent(ourData);
        };
        ourSecondRequest.send();
    }

    function flexFont() {
        var divs = document.getElementsByClassName("botton_box_txt");
        for (var i = 0; i < divs.length; i++) {
            var relFontsize = divs[i].offsetHeight * 0.20;
            divs[i].style.fontSize = relFontsize + 'px';
        }
    };

    window.onresize = function (event) {
        flexFont();
        larg();
    };

    flexFont();

    var dados;
    var progression;
    var proTemp = 0;
    var starTemp = 0;

    function loadContent(data) {
        dados = data;
        var modulos = [
        document.getElementById("m0"),
        document.getElementById("m1"),
        document.getElementById("m2"),
        document.getElementById("m3"),
        document.getElementById("m4"),
        document.getElementById("m5"),
        document.getElementById("m6"),
        document.getElementById("m7")
    ];
        var desafioFCE = [
        document.getElementById("estrela1"),
        document.getElementById("estrela2"),
        document.getElementById("estrela3"),
    ]
        var pickDesafio = document.getElementById("desafioBlink");
        var tipoDesafio = document.getElementById("desafioTipo");

        var nameChar = document.getElementById("nomeChar");
        var nameCharHold = document.getElementById("nomeCharHolder");
        var imageChar = document.getElementById("imagemChar");
        var textRight = document.getElementById("textoDir");
        var txtApoioCD = document.getElementById("txtApoioCD");
        var dirContainer = document.getElementById("direitadiv");
        var closeBtn = document.getElementById("closeContainer");
        var closeBox = document.getElementById("closeBox");
        var numGuia = document.getElementById("guiaNum");
        var contador;


        closeBtn.addEventListener("click", function () {
            dirContainer.classList.remove("direitaHide");
            dirContainer.classList.remove("direitaShow");
            dirContainer.classList.add("direitaFirstTime");
        });


        modulos.forEach(function (mod, index) {
            mod.addEventListener("click", function () {
                larg();
                nameChar.innerHTML = dados.desafios[index].personagemNome;
                textRight.innerHTML = dados.desafios[index].txtIntro;
                imageChar.src = dados.desafios[index].personagemLink;
                txtApoioCD.style.display = "none";
                if (index == 7) {
                    imageChar.style.width = "250px";
                    imageChar.style.marginTop = "-50px";
                    imageChar.src = "../image/enemy_d7cd0.svg";
                    textRight.innerHTML = "Aqui está, o <span class='monster-name'>Oráculo de Leroc</span>, a última etapa da sua jornada! <span class='toc'><sup>(toc!)</sup></span><br />Dizem que ao olhar diretamente para ele você vê seu reflexo do ontem e do amanhã, se depara com seus sonhos e medos, encontra com suas qualidades e defeitos.<br />Este momento de análise interior pode durar anos e apenas aqueles que estão de fato preparados conseguem prosperar. Você está pronto?<br />Então, minhas últimas palavras para você serão: boa sorte! <span class='toc'><sup>(toc!)</sup></span>";
                } else {
                    imageChar.style.width = "200px";
                    imageChar.style.marginTop = "10px";
                }

                contador = index;
                holder("", contador, desafioFCE, true);

                if (contador >= 5) {
                    if (contador == 5) {
                        numGuia.textContent = "CD Opcional";
                    } else {
                        numGuia.textContent = "CD" + (contador);
                    }

                } else {
                    numGuia.textContent = "CD" + (contador + 1);
                }

                desafioFCE.forEach(function (fce, index) {
                    fce.addEventListener("click", function () {
                        nameChar.innerHTML = dados.desafios[contador].personagemNome;
                        textRight.innerHTML = dados.desafios[contador].txtIntro;

                        if (this.id == "estrela1") {
                            txtApoioCD.style.display = "inline";
                            txtApoioCD.style.paddingBottom = "50px";
                            textRight.innerHTML = dados.desafios[contador].txtFundamental;
                            imageChar.src = dados.desafios[contador].personagemLink;
                            if (contador == 5 || contador == 7) {
                                imageChar.src = dados.desafios[contador].personagemLinkNivel2;
                            }
                            if (contador == 5) {
                                nameChar.innerHTML = dados.desafios[contador].personagemNome2;
                            }

                            if (contador == 7) {
                                imageChar.src = "../image/enemy_d7cd.svg";
                            }
                        }
                        if (this.id == "estrela2") {
                            txtApoioCD.style.display = "inline";
                            txtApoioCD.style.paddingBottom = "50px";
                            textRight.innerHTML = dados.desafios[contador].txtComplementar;
                            imageChar.src = dados.desafios[contador].personagemLinkNivel2;
                            if (contador == 5 || contador == 6) {
                                nameChar.innerHTML = dados.desafios[contador].personagemNome2;
                            }
                            if (contador == 7) {
                                imageChar.src = "../image/enemy_d7cd.svg";
                            }
                        }
                        if (this.id == "estrela3") {
                            txtApoioCD.style.display = "inline";
                            txtApoioCD.style.paddingBottom = "50px";
                            textRight.innerHTML = dados.desafios[contador].txtExtra;
                            imageChar.src = dados.desafios[contador].personagemLinkNivel2;
                            if (contador == 5 || contador == 6) {
                                nameChar.innerHTML = dados.desafios[contador].personagemNome2;
                            }
                            if (contador == 7) {
                                imageChar.src = "../image/enemy_d7cd.svg";
                            }
                        }

                        holder(fce, contador, desafioFCE, false);
                    });
                });
            });
        });
        $("#m0").click();
        $("#closeContainer").click();

        closeBtn.addEventListener("click", function () {
            dirContainer.classList.add("direitaHide");
            dirContainer.classList.remove("direitaShow");
            dirContainer.classList.remove("direitaFirstTime");
        });
    }

    function checkid(data) {

        var userID = sessionStorage.getItem("id");


        for (var i = 0; i < data.user.length; i++) {

            if (userID == data.user[i].id) {

                progression = data.user[i].desafioCD;

                loadProgression(data.user[i]);
                i = data.user.length;
                canProceed();
                break;

            } else {

            }
        }
    };

    function loadProgression(userData) {
        larg();
        var modulos = [
        document.getElementById("m0"),
        document.getElementById("m1"),
        document.getElementById("m2"),
        document.getElementById("m3"),
        document.getElementById("m4"),
        document.getElementById("m5"),
        document.getElementById("m6"),
        document.getElementById("m7")
    ];
        var progessBarsVetor = [
        document.getElementById("bar0"),
        document.getElementById("bar1"),
        document.getElementById("bar2"),
        document.getElementById("bar3"),
        document.getElementById("bar4"),
        document.getElementById("bar5"),
        document.getElementById("bar6"),
        document.getElementById("bar7")
    ];
        var porcentagemEstrelas = document.getElementById("percentStar");
        clearBox(userData, modulos);

        modulos.forEach(function (mod, index) {
            mod.addEventListener("click", function () {
                var dirContainer = document.getElementById("direitadiv");
                dirContainer.classList.add("direitaShow");
                dirContainer.classList.remove("direitaHide");
                dirContainer.classList.remove("direitaFirstTime");
                clearBox(userData, modulos);
                switch (progression[index].progressao) {
                    case "0":
                        changeBox(mod, 0);
                        break;
                    case "1":
                        changeBox(mod, 1);
                        break;
                    case "2":
                        changeBox(mod, 2);
                        break;
                    case "3":
                        changeBox(mod, 3);
                        break;
                    default:


                }
            });
        });



        starTemp = parseInt((100 * starTemp) / 22);
        porcentagemEstrelas.innerHTML = starTemp;

        progessBarsVetor.forEach(function (ele, index) {

            if (proTemp >= 1) {
                ele.style.backgroundColor = "#7AC943";
                proTemp--;
            } else {
                proTemp = 0;
                ele.style.backgroundColor = "#BDCCD4";
            }
        })

    }

    function clearBox(userData, modulos) {
        var nameChar = document.getElementById("nomeChar");
        var nameCharHold = document.getElementById("nomeCharHolder");
        var rankStarText = document.getElementById("rankStarText");
        var imageChar = document.getElementById("imagemChar");
        var starQtn = 0;

        larg();
        imageChar.style.animation = 'none';
        imageChar.offsetHeight; /* trigger reflow */
        imageChar.style.animation = null;

        nameCharHold.style.animation = 'none';
        nameCharHold.offsetHeight; /* trigger reflow */
        nameCharHold.style.animation = null;

        nameChar.style.animation = 'none';
        nameChar.offsetHeight; /* trigger reflow */
        nameChar.style.animation = null;

        for (var i = 0; i < 8; i++) {
            starQtn += parseInt(userData.desafioCD[i].estrelas);
            starTemp += parseInt(userData.desafioCD[i].estrelas);
            switch (userData.desafioCD[i].progressao) {
                case "-1":
                    modulos[i].src = '../image/left_box_off_cd.svg';

                    var old_element = document.getElementById(modulos[i].id);
                    var new_element = old_element.cloneNode(true);
                    old_element.parentNode.replaceChild(new_element, old_element);
                    break;
                case "0":
                    modulos[i].src = '../image/left_box_off_0_cd.svg';
                    break;
                case "1":
                    modulos[i].src = '../image/left_box_off_1_cd.svg';
                    break;
                case "2":
                    modulos[i].src = '../image/left_box_off_2_cd.svg';
                    proTemp += 1;
                    break;
                case "3":
                    modulos[i].src = '../image/left_box_off_3_cd.svg';
                    proTemp += 1;
                    break;
                default:

            }

        }
        if (starQtn < 10) {
            rankStarText.innerHTML = "<strong>" + "0" + starQtn + "</strong>";
        } else {
            rankStarText.innerHTML = "<strong>" + starQtn + "</strong>";
        }

    }

    function changeBox(mod, lvlBox) {

        if (lvlBox == 0) {
            mod.src = "../image/left_box_on_0_cd.svg";
        }
        if (lvlBox == 1) {
            mod.src = "../image/left_box_on_1_cd.svg";
        }
        if (lvlBox == 2) {
            mod.src = "../image/left_box_on_2_cd.svg";
        }
        if (lvlBox == 3) {
            mod.src = "../image/left_box_on_3_cd.svg";
        }
    }

    function holder(fce, contador, desafioFCE, isIntro) {

        var pickDesafio = document.getElementById("desafioBlink");
        var tipoDesafio = document.getElementById("desafioTipo");
        var desafioHead = document.getElementById("desafioHeader");
        var svgCabeca = document.getElementById("svgHead");

        if (isIntro) {
            desafioHead.innerHTML = "S V G :";
            svgCabeca.style.display = "inline";
        } else {
            desafioHead.innerHTML = "D E S A F I O";
            svgCabeca.style.display = "none";
        }


        if (progression[contador].estrelas == 0) {
            if (isIntro) {
                tipoDesafio.innerHTML = "&nbsp";
                desafioFCE[0].src = '../image/box_empt.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
                pickDesafio.style.display = "inline";
            }
            if (fce.id == "estrela1") {
                desafioFCE[0].src = '../image/right_box_empt_select_cd.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela2") {
                desafioFCE[0].src = '../image/box_empt.svg';
                desafioFCE[1].src = '../image/right_box_empt_select_cd.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela3") {
                desafioFCE[0].src = '../image/box_empt.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/right_box_empt_select_cd.svg';
            }
        }
        if (progression[contador].estrelas == 1) {
            if (isIntro) {
                tipoDesafio.innerHTML = "&nbsp";
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
                pickDesafio.style.display = "inline";
            }
            if (fce.id == "estrela1") {
                desafioFCE[0].src = '../image/right_box_complet_select_cd.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela2") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_empt_select_cd.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela3") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/box_empt.svg';
                desafioFCE[2].src = '../image/right_box_empt_select_cd.svg';
            }
        }
        if (progression[contador].estrelas == 2) {
            if (isIntro) {
                tipoDesafio.innerHTML = "&nbsp";
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
                pickDesafio.style.display = "inline";
            }
            if (fce.id == "estrela1") {
                desafioFCE[0].src = '../image/right_box_complet_select_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela2") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_select_cd.svg';
                desafioFCE[2].src = '../image/box_empt.svg';
            }
            if (fce.id == "estrela3") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/right_box_empt_select_cd.svg';
            }
        }
        if (progression[contador].estrelas == 3) {
            if (isIntro) {
                tipoDesafio.innerHTML = "&nbsp";
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/right_box_complet_cd.svg';
                pickDesafio.style.display = "inline";
            }
            if (fce.id == "estrela1") {
                desafioFCE[0].src = '../image/right_box_complet_select_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/right_box_complet_cd.svg';
            }
            if (fce.id == "estrela2") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_select_cd.svg';
                desafioFCE[2].src = '../image/right_box_complet_cd.svg';
            }
            if (fce.id == "estrela3") {
                desafioFCE[0].src = '../image/right_box_complet_cd.svg';
                desafioFCE[1].src = '../image/right_box_complet_cd.svg';
                desafioFCE[2].src = '../image/right_box_complet_select_cd.svg';
            }
        }

        if (contador == 0) {
            desafioFCE[1].style.display = "none";
            desafioFCE[2].style.display = "none";
            pickDesafio.style.marginTop = "-70px";
        } else {
            desafioFCE[1].style.display = "inline";
            desafioFCE[2].style.display = "inline";
            pickDesafio.style.marginTop = "0px";
        }
    }


});
