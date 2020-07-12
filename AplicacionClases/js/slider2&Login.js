
//--------------------- LOGIN

 $(".submenu").click(function(){
    $(this).children("ul").slideToggle();
});
$("ul").click(function(p){
    p.stopPropagation;
});
$(".menu").click(function(p){
    p.stopPropagation;
});

$(".menu-sub1").click(function(){
    $(this).children("ul").slideToggle();
});
$("ul").click(function(p){
    p.stopPropagation;
});
$(".menu").click(function(p){
    p.stopPropagation;
});

var modal=document.getElementById('id01');

window.onclick = function(event){
    if(event.target ==modal){
        modal.style.display="none";
    
        
    }

}



$(document).ready(function(){
   
				
              // close registro
                  $('#close-reg').on('click',function(){
                     document.getElementById('id01').style.display= 'none';
                     document.getElementById('registro').style.display= 'none';
                     document.getElementById('login').style.display= 'block';
                      $('#txt-form').empty();
                    });
                
                    $('#close-log').on('click',function(){
                     document.getElementById('id01').style.display= 'none';
                        $('#txt-form').empty();
                     
                    });
                      $('#close-ress').on('click',function(){
                     document.getElementById('id01').style.display= 'none';
                        $('#txt-form').empty();
                     
                    });
			});

function mostrar() {
            document.getElementById('id01').style.display = "block";
            
        }

 function cerrar() {
            document.getElementById('id01').style.display = "none";
        }
