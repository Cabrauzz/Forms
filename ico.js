function Idade() {

  let nascimento = document.getElementById("date").value
  let partesData = nascimento.split("-"); // divide a string em um array ["2023", "03", "15"]
  let dataInvertida = partesData[2] + "/" + partesData[1] + "/" + partesData[0]; // cria a string "15/03/2023"
  let idade = document.getElementById("idade")
  let dataAtual = new Date().toLocaleString().substr(0, 10)
  let ultimos4DigitosNascimento = dataInvertida.substring(dataInvertida.length - 4)
  let ultimos4DigitosAtual = dataAtual.substring(dataAtual.length - 4)
  let cont = ultimos4DigitosAtual - ultimos4DigitosNascimento
  idade.value = cont

  if(dataInvertida == dataAtual){
      document.getElementById("date").value =""
      alert("Data atual não permitido")
  }

  if(cont < 16){
      document.getElementById("date").value =""
      alert("Você não pode participar")
  } else{
      alert("Dados eviados");
  }

  return cont;
}

const button = document.getElementById('submit')
button.addEventListener('click', (event)=>{
  event.preventDefault()
  Idade()
})

