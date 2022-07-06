import { obterPesoAltura } from '/src/scripts/obterPesoAltura.mjs'
import { exibirImc } from '/src/scripts/exibirImc.mjs'
import { calcularImc } from '/src/scripts/calcularImc.mjs'
import { classificarImc } from '/src/scripts/classificarImc.mjs'
import { vereditoImc } from '/src/scripts/vereditoImc.mjs'

function main(){
     const { peso, altura } = obterPesoAltura()
	 const imc = calcularImc(peso, altura)
	 const classificacao = classificarImc(imc)
	 const veredito = vereditoImc(classificacao)

	 exibirImc(imc, veredito)
}

document.querySelector('input[type="button"]').addEventListener('click', main)
