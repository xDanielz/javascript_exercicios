function vereditoImc(classificacao){
  console.log('veredito...')

	switch(classificacao){
    case -1:
	    return 'Magreza'
		case 0:
		  return 'Normalidade'
		case 1:
			return 'Sobrepeso'
		case 2:
			return 'Obesidade'
		case 3:
			return 'Obesidade Grave'
		default:
			return 'Classificação inválida'
	}
}

const _vereditoImc = vereditoImc
export { _vereditoImc as vereditoImc }

