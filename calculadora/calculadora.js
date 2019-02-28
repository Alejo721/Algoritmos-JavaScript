

document.getElementById("Boton").addEventListener("click",function iniciar(){

    let suma = (operacion) =>{
        let b = operacion.split("+")
        let contador = 0
        for(let i = 0; i < b.length; i++){
            contador = contador + Number(b[i])
        }
        return contador;
    }

    let resta = (operacion) =>{
        let a = operacion.split("-").join(" -").split(" ")
        let contador = 0
        for (let i=0; i < a.length; i++){
            contador = contador + Number(a[i])
        }
        return contador;
    }

    let multiplicacion = (operacion) =>{
        let a = operacion.split("*")
        let contador = 1
        for(let i=0; i < a.length; i++){
            contador = contador * Number(a[i])
        }
        return contador
     }

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
    let bandera=true;
    while(bandera==true){
        let numeromenu = prompt("Ingresar el numero correspondiente en el menú: ","0");
        numeromenu = Number(numeromenu);
            
        switch (numeromenu) {
            case 0:
                bandera=false;
            //console.log("hola hpta");
            
                break;
            case 1:
                let opsuma = prompt("ingrese la operacion ", "3+3");
                let resultadosuma = suma(opsuma)
                alert("El resultado de la operación es: "+resultadosuma);
                break;

            case 2:
                let opresta = prompt("ingrese la operacion", "1-1");
                let resultadoresta = resta(opresta)
                alert("EL resultado de la operación es: "+resultadoresta);
                break;

            case 3:
                let opmult = prompt("ingrese la operacion ", "2*2");
                let resultadomult = multiplicacion(opmult)
                alert("El resultado de la operación es: "+resultadomult)
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
                bandera=false;
                break;
        }
    }

}, true);