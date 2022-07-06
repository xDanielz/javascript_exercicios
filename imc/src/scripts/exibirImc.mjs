function exibirImc(imc, veredito){
  console.log('exibindo resultado...')
  document.getElementById('imc').innerText = Number.parseFloat(imc).toFixed(2)
  document.getElementById('veredito').innerText = veredito
}

const _exibirImc = exibirImc
export { _exibirImc as exibirImc }

