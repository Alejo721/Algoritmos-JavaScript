let vidaAlejito = 200;
let vidaMarto = 220;
let golpeMinAlejito = 7;
let golpeMaxAlejito = 18;
let golpeMinMarto = 9;
let golpeMaxMArto = 16;

estanVivos=_=> vidaAlejito>0 && vidaMarto>0;
console.log(`R: ${estanVivos()}`)

CalcularGolA = () => {
    return Math.round(Math.random()* (golpeMaxAlejito - golpeMinAlejito) + golpeMinAlejito)
                
}

CalcularGolM = () =>{
    return Math.round(Math.random()* (golpeMaxMArto - golpeMinMarto) + golpeMinMarto)
}

console.log(estanVivos());

let round = 1
while(estanVivos()){
    let GolpeA = CalcularGolA()
    let GolpeM = CalcularGolM()

    if(GolpeA > GolpeM){
        vidaMarto = vidaMarto - GolpeA
        console.log("el round es: " + round);
        console.log("golpeAlejito: " + GolpeA);
        console.log("golpeMartin: " + GolpeM);
        console.log("vida de martin: " + vidaMarto);
        console.log("vida de alejito: " + vidaAlejito);
        console.log("***********************************************");
     }
    else if(GolpeA < GolpeM){
        vidaAlejito = vidaAlejito - GolpeM
        console.log("el round es: " + round);
        console.log("golpeAlejito: " + GolpeA);
        console.log("golpeMartin: " + GolpeM);
        console.log("vida de martin: " + vidaMarto);
        console.log("vida de alejito: " + vidaAlejito);
        console.log("***********************************************");
        

    }
    else {
        vidaAlejito = vidaAlejito - GolpeM
        vidaMarto = vidaMarto - GolpeA
        
        console.log("el round es: " + round);
        console.log("golpeAlejito: " + GolpeA);
        console.log("golpeMartin: " + GolpeM);
        console.log("vida de martin: " + vidaMarto);
        console.log("vida de alejito: " + vidaAlejito);
        console.log("***********************************************");

    }
    round= round+1
    
}

if(vidaAlejito<=0){
        console.log("!!GANO MARTO!!");
        
        
    }
    else{
        console.log("!!GANO ALEJITO!!");
        
    }