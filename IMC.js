function IMC(peso,altura) {
  let imc=0
  imc=peso/(altura*altura)

  if(imc<18){
    console.log("usted esta flaco: " +imc);
    
  }
  else if(imc>=18 && imc<=25){
    console.log("usted esta bien: "+imc);
    
  }
  else{
    console.log("usted esta en sobrepeso: "+ imc);
    
  }
  

}

  


(IMC(65,1.68));
