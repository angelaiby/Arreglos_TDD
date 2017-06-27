
 var assert = require('assert');
 function EjerciciosObjetos2(){
   //ejercicio1
   this.suma=function(numInicial, numFinal){
    var sumaTotal=0;
    var objeto={inicio:numInicial,fin:numFinal}
    for(var i=objeto.inicio;i<=objeto.fin;i++){
       sumaTotal=sumaTotal+i;
    }
    return sumaTotal;
 }
 }

// ejercicio2
function Datos (nombre,edad,ocupacion,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.ocupacion=ocupacion;
  this.genero=genero;
  this.mensaje= function info(){
      if( this.edad>=17  && this.ocupacion== "Estudiante Laboratoria" && this.genero =="femenino"){
        return ("You're awesome");
      }
  else{
    return "Upsiii";
  }}}
//var resultado =new datos("ana",20,"Estudiante Laboratoria","femenino");
  //return(resultado.mensaje());


 //ejercicios3;

 function pasatiempo(nombre,edad,pasatiempo){
  this.nombre =nombre;
  this.edad = edad;
  this.pasatiempo =pasatiempo;
  return ("Hola soy "+ nombre +"tengo "+ edad+ " años y me gusta " + pasatiempo);
}
// ejercicios 4
function info(nombre, apellido, edad, genero, ciudad,pais){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad=ciudad;
  this.pais=pais;
  this.ficha= function informacion(){
     return "Nombre: "+ this.nombre + " "+this.apellido +"\n"+"Edad:" + this.edad+"\n"+"Pais:" + this.pais;
}
}

 //return(datosPaciente.ficha());


var ejercicios = new EjerciciosObjetos2();

describe('Ejercicios Objetos2', function(){
describe('Ejercicio obj 1', function(){
  it("numero incial 1 y final 10", function(){
    assert.equal(55,ejercicios.suma(1,10));
  });
  });

describe('Ejercicio 2', function(){
  it("eres increible", function(){
    var resultado =new Datos("ana",20,"Estudiante Laboratoria","femenino");

    assert.equal("You're awesome",resultado.mensaje());
    });
    it("lo siento", function(){
      var resultado =new Datos("ana",15,"Estudiante","femenino");
      assert.equal("Upsiii",resultado.mensaje());
      });
    });

describe('Ejercicio 3', function(){
  it("informacion personal", function(){
    assert.equal("Hola soy Angela tengo 23 años y me gusta escuchar musica",pasatiempo("Angela ",23,"escuchar musica"));
    });
    });


describe('Ejercicio 4', function(){
  var datosPaciente =new info("Ana","Delgado",20,"femenino","Arequipa","Peru");
  it("datos del paciente", function(){
    assert.equal("Nombre: Ana Delgado\nEdad:20\nPais:Peru",datosPaciente.ficha());
    });
    });
  });
