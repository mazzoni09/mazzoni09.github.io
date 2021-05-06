console.image = function (url, size = 100) {
    var image = new Image();
    image.onload = function () {
        var style = [
      'font-size: 1px;',
      'padding: ' + this.height / 100 * size + 'px ' + this.width / 100 * size + 'px;',
      'background: url(' + url + ') no-repeat;',
      'background-size: contain;'
     ].join(' ');
        console.log('%c ', style);
    };
    image.src = url;
};

console.image('https://mazzoni09.github.io/assets/images/MZN%20Monkey%20No%20Smoke%20.png', [10]);


var defaultOptions = {
    container: document.body,
    panelSelector: '> section',
    directionThreshold: 20,
    delay: 0,
    duration: 100,
    easing: function (t) {
        return t
    },
};

var testex = new PanelSnap(defaultOptions);


function removeAllClass(){
    $("#home_img").removeClass("filter_nav");
    $("#sobre_img").removeClass("filter_nav");
    $("#projetos_img").removeClass("filter_nav");
    $("#contato_img").removeClass("filter_nav");
}

testex.on('snapStop', function (panel) {
    removeAllClass();
    
    switch (panel.id) {
        case 'home':
            $("#home_img").addClass("filter_nav");
            break;
        case 'sobre':
            $("#sobre_img").addClass("filter_nav");
            break;
        case 'projetos':
            $("#projetos_img").addClass("filter_nav");
            break;
        case 'contato':
            $("#contato_img").addClass("filter_nav");
            break;
        default:
            console.log('Error on panel detection');
    }
});


function home(){
   testex.snapToPanel(document.getElementById('home'))
}

function sobre(){
   testex.snapToPanel(document.getElementById('sobre'))
}

function projetos(){
   testex.snapToPanel(document.getElementById('projetos'))
}

function contato(){
   testex.snapToPanel(document.getElementById('contato'))
}

