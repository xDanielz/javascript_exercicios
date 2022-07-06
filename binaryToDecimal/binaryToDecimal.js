function binaryToDecimal(binaryNumber){
	let decimalNumber = 0

	for(let i = 0; i < binaryNumber.length; i++){
		decimalNumber += binaryNumber[i] * Math.pow(2, i)
	}

	return decimalNumber
}

console.log(binaryToDecimal('101'))
