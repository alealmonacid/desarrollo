//Efecto Scroll
$(function(){
    $("a").click(function(event){
       if (this.hash !== "") {
           event.preventDefault();

           var car = this.hash;

           $("html, body").animate({
               scrollTop: $(car).offset().top
           }, 800, function(){
               window.location.hash = car;
           });
       }
   });
   
   //arroja alerta al momento de hacer clic en btn enviar correo
   $("#enviarCorreo").click(function () {
    var mail = prompt("ingrese su correo", "");
    alert("La receta fue enviada a su correo " + mail + ".");
   });
   
//Pintar en color texto solo en titulos de seccion paso a paso, al hacer doble clic se cambia a color rojo, paso a paso se logró gracias a documentación de JQuery
    $("#ingredientes h3").on("dblclick", function(){
        $(this).css("color", "red");
      });


   //Implementar los selectores de clases, utilizar el método de jQuery denominado `toggle` para hacer desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de Recetas Relacionadas, esto debe suceder cuando el usuario haga un clic sobre el título de cualquiera de las tres tarjetas.
    $("#recetas h3").click(function(){
     $("h6").toggle();
    });

  $('[data-toggle="tooltip"]').tooltip();
});





