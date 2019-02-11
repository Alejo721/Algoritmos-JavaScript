'use strict'

function suma (a,b){
    return a+b;
}

console.log(suma(10,13));

function resta(a,b){
    return a-b;
}

console.log(resta(10,13));

function multiplicacion(a,b){
    return a*b;
}
console.log(multiplicacion(10,13));

function division(a,b){
    if(b==0){
        console.log("no es valido ");
        
    }
    else{
        return a/b;
    }

}
console.log(division(0,10));

function potenciacion(a,b){
    if(b==0){
        return 1
    }
    else{
        let res = 1
        for(let i=0;i<b;i++){
            res=res * a
        }
     return res;     
    }  
}
console.log(potenciacion(3,2));
