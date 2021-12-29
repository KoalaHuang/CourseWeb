(function(window) {

  var speakWord = "Good Bye";

  var obj = {};

  obj.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.speakGoodBye = obj.speak;

})(window);

