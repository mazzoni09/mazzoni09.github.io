console.image = function(url, size = 100) {
  var image = new Image();
  image.onload = function() {
    var style = [
      'font-size: 1px;',
      'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
      'background: url('+ url +') no-repeat;',
      'background-size: contain;'
     ].join(' ');
     console.log('%c ', style);
  };
  image.src = url;
};

console.image('https://mazzoni09.github.io/assets/images/MZN%20Monkey%20No%20Smoke%20.png' ,[10]);