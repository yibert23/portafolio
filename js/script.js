$(document).ready(function(){

    // Abrir y Cerrar Menú Responsive >>> Derecha 290px
    $('#abrir').click(function(){
        $('#menu-cortina').animate({
            right: 0
        });
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar, #a-contacto-movil').click(function(){
        $('#menu-cortina').animate({
            right: -290
        });
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
    });

}); 