
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
   
		$(".btn-cita-libre").click(function(){
            $.confirm({
				title: '¿Deseas Registrar esta cita de clase?',
				content: 'Se Registrara la cita para la fecha : ???',
				confirmButtonClass: 'btn-enviar',
    			cancelButtonClass: 'btn-enviar',
    			confirmButton: 'Confirmar',
    			cancelButton: 'Cancelar',
				confirm: function(){
                    $.post('',{
                    
                },function(e){
                    location.href=" ";
                        
            });
		    }
		});
	});
	
	  $(".blanco-p").click(function(){
            $.confirm({
				title: 'Quiere registrar una clase para este dia?',
				content: 'Se Registrara la cita para la fecha : ???',
				confirmButtonClass: 'btn-enviar',
    			cancelButtonClass: 'btn-enviar',
    			confirmButton: 'Confirmar',
    			cancelButton: 'Cancelar',
				confirm: function(){
                    $.post('',{
                    
                },function(e){
                    location.href=" ";
                        
            });
		    }
		});
	});
    
    $(".btn-cita-ocupada").click(function(){
            $.confirm({
				title: 'La Cita se Encuentra ocupada!!',
				content: 'Ya alguien reservo este dia y hora, sigue intentando',
				confirmButtonClass: 'btn-enviar',
    			cancelButtonClass: 'btn-enviar',
    			confirmButton: 'Confirmar',
    			cancelButton: 'Cancelar',
				confirm: function(){
                    $.post('',{
                    
                },function(e){
                    location.href=" ";
                        
            });
		    }
		});
	});
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

        function alante() {
            document.getElementById('horario-julio').style.display = "none";
            document.getElementById('horario-Agosto').style.display = "block";
            
        }
        function atras() {
            document.getElementById('horario-Agosto').style.display = "none";
            document.getElementById('horario-julio').style.display = "block";
            
        }
