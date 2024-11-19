let calcular = function() {

    let metros =  document.getElementById("metros").value
    let metrosInteiro = parseFloat(metros)

    let dc = metrosInteiro * 10
    let cm = metrosInteiro * 100
    let mm = metrosInteiro * 1000

    let saídaResultado1 = document.getElementById("Resultado1")
  saídaResultado1.innerHTML = "Metros em decímetros é " + dc
    let saídaResultado2 = document.getElementById("Resultado2")
  saídaResultado2.innerHTML = "Metros em centímetros é " + cm
    let saídaResultado3 = document.getElementById("Resultado3")
  saídaResultado3.innerHTML = "Metros em milímetros é " + mm
    
  }