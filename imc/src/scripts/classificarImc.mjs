function classificarImc(imc){
  console.log('classificando...')
  if(imc < 18.5){ return -1 }
	else if(imc < 24.9){ return 0 }
	else if(imc < 29.9){ return 1 }
	else if(imc < 39.9){ return 2 }
	else{ return 3 }
}

const _classificarImc = classificarImc
export { _classificarImc as classificarImc }

