let calcular = function() {
    let comecou = parseFloat(document.getElementById("comecou").value)
    
    let parou = parseFloat(document.getElementById("parou").value)
  
    let dia = parseFloat(document.getElementById("dia").value)
   
    let maco = parseFloat(document.getElementById("maco").value)
   
    let anos = parou - comecou
    let cigarro = dia * 365
    let total = cigarro * anos
    let calcule = total / 20
    let gasto = calcule * maco
    console.log(anos, cigarro, total, calcule, gasto)
  
    let saida = document.getElementById("Resultado")
    saida.innerHTML = "R$ "+gasto
    
  }