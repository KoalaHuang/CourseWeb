(function(window) {

  var speakWord = "Hello";

  var obj = {};

  obj.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.speakHello = obj.speak;

})(window);

