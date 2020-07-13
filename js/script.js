
var btnMenu= document.getElementById('btn-menu');
var menu= document.getElementById('menu');
btnMenu.addEventListener('click',function(){
   'use strict';
    menu.classList.toggle('mostrar');
});

var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});