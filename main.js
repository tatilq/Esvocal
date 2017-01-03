
function esVocal (){
    var letra = document.getElementById("letra").value;
    if(letra!="")
      {
          if(letra.toLowerCase()=='a' || letra.toLowerCase()=='e' || letra.toLowerCase()=='i' || letra.toLowerCase()=='o' ||                          letra.toLowerCase()=='u')
            { 
              document.getElementById("mensajes").innerHTML = '<div class="alerta1">Es una vocal';
            }
        else
          {
            document.getElementById("mensajes").innerHTML = '<div class="alerta">No es vocal';
            var letra = document.getElementById("letra").value = " ";
          }
      }
    else
      {
  document.getElementById("mensajes").innerHTML = '<div class="alerta">¡Ingresa Datos!</div>';
      }
}
