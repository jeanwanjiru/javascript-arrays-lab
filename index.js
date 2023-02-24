  var  kittens = ["Milo","Otis","Garfield"] 


 function destructivelyAppendKitten (name){
    kittens.push(name);
 }
function destructivelyPrependKitten(name){
    kittens.unshift(name);
}
function destructivelyRemoveFirstKitten(name){
    kittens.shift(name);
}
function destructivelyRemoveLastKitten(name){
    kittens.pop(name);
}
function appendKitten(name){
   return kittens.concat(name);
}
    function prependKitten(name){
          const newkittens = [name, ...kittens];
          return newkittens;
    }function removeLastKitten(){
        var caats= kittens.slice(0,kittens.length-1);
        return caats;
      }

function removeFirstKitten(){
  var catts= kittens.slice(1)
  return catts
}
    
    