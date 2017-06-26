var assert = require('assert');
function EjerciciosArray()
{
  this.ejercicio1 = function(_arr, _num)
  {
      var res = 0;
      if(Array.isArray(_arr))
      {
        res = _arr.reduce(function(_total, _actual){
          return _total * _actual;
        });
      }else{
        if(!isNaN(_arr)){
          res = _arr;
        }
      }


     if(!isNaN(_num)){
       res = res * _num;
     }

     return res;
  }

  this.ejercicio2 = function(_telefonos, _filtro)
  {
      return _telefonos.filter(function(a){
        var primeras = a.toString().substr(0,3);
        var ultimas = a.toString().substr(-3);
        return (primeras == _filtro || ultimas == _filtro);
      });
  }

  this.multiplos=function(numeros,x){
var array=[];
numeros.forEach(function(multi){
  if(multi%x==0){
    array.push(multi);
  }

});
  return array;
}
return(multiplos([45,95,8,3,10,25,20,5],5));

this.num=function(numeros){
var dobles=numeros.map(function(x){
    return x*2;
  }).map(function(x){
   return x+1;
 });
  return(dobles);
}
num([3,5,6,7]);

this.conversion=function(celcius){
var convertir=celcius.map(function(x){
    return x*9/5+32;
  });
     return(convertir);
  }
conversion([20,15,30]);

this.multi=function(numeros)
{var multiTotal=numeros.reduce(function(x,b){
    return x*b;
  });
 return(multiTotal);
}
multi([2,5,6]);

}

var ejercicios = new EjerciciosArray();




describe('Ejercicios Arrays', function(){
  describe('Ejercicio 1', function(){
    it('Prueba de [2,3] y 10', function(){
      assert.equal(60, ejercicios.ejercicio1([2,3], 10));
    });
    it('Prueba de [2,3] y "Hola"', function(){
      assert.equal(6, ejercicios.ejercicio1([2,3], "Hola"));
    });
    it('Prueba de [2,3] y nada', function(){
      assert.equal(6, ejercicios.ejercicio1([2,3]));
    });
    it('Prueba de 2 y 3', function(){
      assert.equal(6, ejercicios.ejercicio1(2,3));
    });
  });

  describe('Ejercicio 2', function(){
    it("cuando es [996548337, 997616207], 207", function(){
      assert.deepEqual([997616207], ejercicios.ejercicio2([996548337, 997616207], 207));
    });
    it("cuando es [996548337, 97616207], 207", function(){
      assert.deepEqual([97616207], ejercicios.ejercicio2([996548337, 97616207], 207));
    });
  });

});


describe('Ejercicio 3', function(){
  it("cuando area [6,8]", function(){
    assert.equal(48,ejercicios.area(6,8));
  });

});
