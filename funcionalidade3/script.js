let calcular = function(){
    let altura =  parseFloat(document.getElementById("a").value)
  
    let peso =  parseFloat(document.getElementById("p").value)
  
    let imc = peso/(altura*altura)
  
  if (imc < 16){
      saida.innerhtml = "Abaixo do peso"
        
    }
  else {
    if ((imc>= 16)&&(imc<17))
    saída.innerhtml = "Abaixo do peso moderadamente"
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  }