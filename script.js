/* Declaracion de variables de todo el juego */

//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let preguntas = ["pregunta1.PNG", "pregunta2.PNG", "pregunta3.PNG", "pregunta4.PNG", "pregunta5.PNG"];

//arreglo que guardara la opcion correcta
let correcta = [1,1,2,0,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["Huelva", "Sevilla", "Malaga"]);
opciones.push(["21", "22", "24"]);
opciones.push(["Juego de Tronos", "Vikingos", "Peaky Blinders"]);
opciones.push(["Futbol", "Baloncesto", "Tenis"]);
opciones.push(["Sevilla FC", "Barcelona", "Madrid"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;
/* Variables de segundo Juego*/
    // Array de palabras
    var palabras = [["Sevilla", "Una Ciudad"], ["ordenador", "Algo que utilizamos siempre"], ["valorant", "Un juego de ordenador"], ["negro", "Un color"], ["felicidad", "Un estado"]];
    // Palabra a averiguar
    var palabra = "";
    // Nº aleatorio
    var rand;
    // Palabra oculta
    var oculta = [];
    // Elemento html de la palabra
    var hueco = document.getElementById("palabra");
    // Contador de intentos
    var cont = 6;
    // Botones de letras
        var buttons = document.getElementsByClassName('letra');
    // Boton de reset
    var btnInicio = document.getElementById("reset");
/**-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Tercer Juego*/
var cartas = new Array( 
  {nombre: 'Respeto', seleccion: false}, {nombre: 'Sinceridad', seleccion: false}, 
  {nombre: 'Confianza', seleccion: false}, {nombre: 'Respeto', seleccion: false}, 
  {nombre: 'Organización', seleccion: false}, {nombre: 'Responsabilidad', seleccion: false}, 
  {nombre: 'Planificación', seleccion: false}, {nombre: 'Empeño', seleccion: false}, 
  {nombre: 'Respeto', seleccion: false}, {nombre: 'Sinceridad', seleccion: false}, 
  {nombre: 'Confianza', seleccion: false}, {nombre: 'Respeto', seleccion: false}, 
  {nombre: 'Organización', seleccion: false}, {nombre: 'Responsabilidad', seleccion: false}, 
  {nombre: 'Planificación', seleccion: false}, {nombre: 'Empeño', seleccion: false} );
        
var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";
/**----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/** Primer Juego  */
document.getElementById("pantalla-juego2").style.display= "none";
document.getElementById("pantalla-juego3").style.display= "none";
function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    document.getElementById("pantalla-juego2").style.display= "none";
    document.getElementById("pantalla-juego3").style.display= "none";
    cargarPregunta();

}
document.getElementById("pantalla-juego2").style.display= "none";
//funcion que carga la siguiente bandera y sus opciones
function cargarPregunta(){
    //controlo sis se acabaron las banderas
    if(preguntas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imagen").src = "img/" + preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarPregunta,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("pantalla-juego2").style.display = "none";
    document.getElementById("pantalla-juego3").style.display= "none";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}
/**------------------------------------------------------------------------------------------------------ */

/*Segundo Juego*/
function irSegundoJuego(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-juego2").style.display = "block";
    document.getElementById("pantalla-juego3").style.display= "none";

    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC("a","z");
}
cont = 6;
    document.getElementById("intentos").innerHTML=cont;
    function generaPalabra() {
        rand = (Math.random() * 19).toFixed(0);
        palabra = palabras[rand][0].toUpperCase();
        console.log(palabra);
      }
      
      // Funcion para pintar los guiones de la palabra
      function pintarGuiones(num) {
        for (var i = 0; i < num; i++) {
          oculta[i] = "_";
        }
        hueco.innerHTML = oculta.join("");
      }
      
      //Generar abecedario
function generaABC (a,z) {
        document.getElementById("abcdario").innerHTML = "";
        var i = a.charCodeAt(0), j = z.charCodeAt(0);
        var letra = "";
        for( ; i<=j; i++) {
          letra = String.fromCharCode(i).toUpperCase();
          document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
          if(i==110) {
            document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
          }
        }
}
      
      // Chequear intento
      function intento(letra) {
        document.getElementById(letra).disabled = true;
        if(palabra.indexOf(letra) != -1) {
          for(var i=0; i<palabra.length; i++) {
            if(palabra[i]==letra) oculta[i] = letra;
          }
          hueco.innerHTML = oculta.join("");
          document.getElementById("acierto").innerHTML = "Bien!";
          document.getElementById("acierto").className += "acierto verde";
        }else{
          cont--;
          document.getElementById("intentos").innerHTML = cont;
          document.getElementById("acierto").innerHTML = "Fallo!";
          document.getElementById("acierto").className += "acierto rojo";
          document.getElementById("image"+cont).className += "fade-in";
        }
        compruebaFin();
        setTimeout(function () { 
          document.getElementById("acierto").className = ""; 
        }, 800);
      }
      
      // Obtener pista
      function pista() {
        document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
      }
      
      // Compruba si ha finalizado
      function compruebaFin() {
        if( oculta.indexOf("_") == -1 ) {
          document.getElementById("msg-final").innerHTML = "Felicidades !!";
          document.getElementById("msg-final").className += "zoom-in";
          document.getElementById("palabra").className += " encuadre";
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
          }
          document.getElementById("reset").innerHTML = "Empezar";
          btnInicio.onclick = function() { location.reload() };
        }else if( cont == 0 ) {
          document.getElementById("msg-final").innerHTML = "Game Over";
          document.getElementById("msg-final").className += "zoom-in";
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
          }
          document.getElementById("reset").innerHTML = "Empezar";
          btnInicio.onclick = function () { location.reload() };
        }
      }
      
      // Restablecer juego
      function inicio() {
        generaPalabra();
        pintarGuiones(palabra.length);
        generaABC("a","z");
        cont = 6;
        document.getElementById("intentos").innerHTML=cont;
      }
      
      // Iniciar
      window.onload = inicio();
/**------------------------------------------------------------------------------------------------------ */
/*Tercer Juego*/
function irTercerJuego(){
        //ocultamos las pantallas y activamos la inicial
        document.getElementById("pantalla-final").style.display = "none";
        document.getElementById("pantalla-inicial").style.display = "none";
        document.getElementById("pantalla-juego").style.display = "none";
        document.getElementById("pantalla-juego2").style.display = "none";
        document.getElementById("pantalla-juego3").style.display = "block";  
        iniciarJuego ();
        resetearJuego ();
        girarCarta ();
        vaciar ();
        colorCambio (posicion, color, contenido);
        comprobar ();
        resetearJuego ();
        
}
//Funcion para iniciar el juego.
function iniciarJuego () {  
  var dato = document.getElementById("juego");
  dato.style.opacity = 1;
  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
  }
};

function resetearJuego () {
  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 16 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
    colorCambio( i, 'black', '?');
  } 
}
//Funcion para girar las cartas
function girarCarta () {
  var evento = window.event;

  jugada2 = evento.target.dataset.valor;
  identificadorJ2 = evento.target.id;


  if ( jugada1 !== "" ) {

    if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
      
      cartas[parseInt(identificadorJ1)].seleccion = true;
      cartas[parseInt(identificadorJ2)].seleccion = true;

      colorCambio(identificadorJ2, "blue", jugada2);
      vaciar();
      comprobar();
    }else if(identificadorJ1 !== identificadorJ2){
      var self = this;
      setTimeout(function(){
        colorCambio(self.identificadorJ1, "black", "?")
        colorCambio(self.identificadorJ2, "black", "?")
        vaciar()
      },200); 

      colorCambio(identificadorJ2, "blue", jugada2);
    }
  } else if(jugada2 !== "valor") {

    colorCambio(identificadorJ2, "blue", jugada2);

    jugada1 = jugada2;
    identificadorJ1 = identificadorJ2;
  }
};

function vaciar ()  {
  jugada1 = ""; 
  jugada2 = ""; 

  identificadorJ1 = "";
  identificadorJ2 = "";
}

function colorCambio (posicion, color, contenido) {
  document.getElementById(posicion.toString()).style.backgroundColor = color;
  document.getElementById(posicion.toString()).innerHTML = contenido;
}   

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 16 ; i++ ){
    if ( cartas[i].seleccion == true ) {
      aciertos ++;
    }

  }

  if(aciertos == 16){
   /*document.getElementById("juego").innerHTML = "Felicidades Ganaste!!!";*/
   alert("Has ganado");
     
  }
}
function irAlInicio(){
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-inicial").style.display = "block";
  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-juego2").style.display = "none";
  document.getElementById("pantalla-juego3").style.display = "none";
  
}
