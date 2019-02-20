let a = "yossoy"
let b = "somos o no somos"
let c = "hasta luego rodas"


palindromo = (texto) =>{
    let derecho = texto.split(" ").join("").split("");
    let reversa = texto.split(" ").join("").split("").reverse();
    let resultado;
    
    for(let i=0; i < derecho.length;i++){
        if(derecho[i]==reversa[i]){
            resultado=true;
        }else{
            resultado = false;
            return [resultado,texto];
        }
    } 
           
    return [resultado,texto];
    

}


verificar=(arreglo) =>{
    let respuesta = arreglo[0];
    let texto = arreglo[1];
    if(respuesta==true){
        console.log("el texto "+texto +" es palindromo");
        
    }
    else{
        console.log("el texto "+texto+" no es palindromo");
        
    }
}

verificar(palindromo(c));
