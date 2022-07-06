function obterPesoAltura(){
	console.log('Obtendo dados...')
  const peso = document.getElementById('peso').value 
  const altura = document.getElementById('altura').value
  return { peso, altura }
}

const _obterPesoAltura = obterPesoAltura
export { _obterPesoAltura as obterPesoAltura }

