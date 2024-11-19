let calcular = function(){

    let t = parseFloat(document.getElementById("trabalho").value)
  
    let a = parseFloat(document.getElementById("ativ").value)
  
    let p = parseFloat(document.getElementById("part").value)
  
    let media = (t * 0.5) + (a * 0.3) + (p * 0.2) / 3
  
    console.log(media)
  
    if (media >= 6)
    {
       let saidaResultado = document.getElementById("Resultado")
      saidaResultado.innerHTML = "Aprovado"  
    }
    else
    {
      let saidaResultado = document.getElementById("Resultado")
      saidaResultado.innerHTML = "Reprovado"  
    } 
  }
  