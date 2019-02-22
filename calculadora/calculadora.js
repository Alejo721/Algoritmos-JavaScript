
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

modulo = (a,b)=>{
    return a%b;
}

console.log(modulo(9,3));

raiz =(a) =>{
    return Math.sqrt(a).toFixed(2);
}
console.log(raiz(4));

seno =(a)=>{
    return Math.sin(a).toFixed(2);
}
console.log(seno(9));

coseno =(a)=>{
    return Math.cos(a).toFixed(2);
}

console.log(coseno(9));

tangente =(a)=>{
    return Math.tan(a).toFixed(2);
}

document.getElementById("Boton").addEventListener("click",function iniciar(){

    while(true){
        let numeromenu = prompt("Ingresar el numero correspondiente en el menú: ","0");
        numeromenu = parseInt(numeromenu);
            
        switch (numeromenu) {
            case 0:
            console.log("hola hpta");
            
                break;
            case 1:
                let opsuma = prompt("ingrese la operacion ", "3+3");
                opsuma = opsuma.split("+");
                let resultadoSuma = suma(Number(opsuma[0]),Number(opsuma[1]));
                alert("El resultado de la operación es: "+resultadoSuma);
                break;

            case 2:
                let opresta = prompt("ingrese la operacion", "1-1");
                opresta = opresta.split("-");
                let resultadoresta = resta(Number(opresta[0]),Number(opresta[1]));
                alert("EL resultado de la operación es: "+resultadoresta);
                break;

            case 3:
                let opmult = prompt("ingrese la operacion ", "2*2");
                opmult = opmult.split("*");
                let resultadomult = multiplicacion(Number(opmult[0]),Number(opmult[1]));
                alert("El resultado de la operación es: "+resultadomult);
                break;

            case 4:
                let opdiv = prompt("ingrese la  operacion ", "5/2");
                opdiv = opdiv.split("/");
                let resultadodiv = division(Number(opdiv[0]),Number(opdiv[1]));
                alert("El resultado de la operación es: "+resultadodiv)
                break;

            case 5:
                let oppot=prompt("ingrese la operacion ", "7^2");
                oppot = oppot.split("^");
                let resultadopot = potenciacion(Number(oppot[0]),Number(oppot[1]));
                alert("El resultado de la operación es: "+resultadopot);
                break;

            case 6:
                let opmod = prompt("ingrese la operacion ", "9%3");
                opmod = opmod.split("%");
                let resultadomod = modulo(Number(opmod[0]),Number(opmod[1]));
                alert("El resultado de la operación es: "+resultadomod);
                break;

            case 7:
                let opraiz = prompt("ingrese la operacion ", "4");
                let resultadoraiz = raiz(Number(opraiz));
                alert("El resultado de la operación es: "+resultadoraiz);
                break;

            case 8:
                let opsen = prompt("ingrese la operacion ", "45");
                let resultadosen = seno(Number(opsen));
                alert("El resultado de la operación es: "+resultadosen);
                break;

            case 9:
                let opcos = prompt("ingrese la operacion ", "45");
                let resultadocos = coseno(Number(opcos));
                alert("El resultado de la operación es: "+resultadocos);
                break;
            
            case 10:
                let optan = prompt("ingrese la operacion ", "45");
                let resultadotan = tangente(Number(optan));
                alert("El resultado de la operación es: "+resultadotan);
                break;
            default:
                break;
        }
    }

}, true);