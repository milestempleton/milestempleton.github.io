var landing = document.getElementById('landing');

if(landing){
  landing.addEventListener('click', function(){
    if (this.classList)
      this.classList.add('hidden');
    else
      this.className += ' ' + 'hidden';

    setTimeout(function(){
      this.style["z-index"] = 0;
    }.bind(this), 600); // this must match fadeout in main.css
  });
}
