var landing = document.getElementById('landing');

landing.addEventListener('click', function(){
  this.style.opacity = 0;
  setTimeout(function(){
    this.style["z-index"] = 0;
  }.bind(this), 600); // this must match fadeout in main.css
});
