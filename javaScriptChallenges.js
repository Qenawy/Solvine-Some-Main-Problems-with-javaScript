// a function that takes array and retuen the sum of them
function takesArray(number) {
    
    var result = 0 ;
    for(var i = 0; i < number.length; i++){
        result+= number[i];  
    }
    //console.log(result);
    return result;
   
}
console.log(takesArray([5,1,5,6]));

// a function that takes a string and return the reversed string 

function takesStringAndRetuenTheReversed(typestr){
    var result ='';
    for(var i = 1 ; i<= typestr.length ; i++ ){
        result += typestr.charAt(typestr.length -i) ;
    }
    console.log(result);
}
takesStringAndRetuenTheReversed("5t7iaty");

// just apply reversed word logic 

var a = "avd" ; 
var f =a.charAt(a.length -1);
var s =a.charAt(a.length -2);
var t =a.charAt(a.length -3);
var tre = `${f}${s}${t}`;
console.log(tre);

// function tha takes 2 values and reurns the sum of them
const sum = (a,b) => {return (a + b)}

console.log(sum(5,7));

