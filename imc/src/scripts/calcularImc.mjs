function calcularImc(peso, altura){
  console.log('calculando...')
  return peso/Math.pow(altura, 2)
}

const _calcularImc = calcularImc
export { _calcularImc as calcularImc }

