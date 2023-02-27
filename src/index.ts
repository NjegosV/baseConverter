import {
  binaryToDecimal,
  decimalToBinary,
  hexToDecimal,
  decimalToHex,
  hexToBinary,
  binaryToHex,
} from './utils/conversions'

console.log(`10011010010 = ${binaryToDecimal('10011010010')}`)
console.log(`1234 = ${decimalToBinary(1234)}`)
console.log(`4D2 = ${hexToDecimal('4D2')}`)
console.log(`1234 = ${decimalToHex(1234)}`)
console.log(`4D2 = ${hexToBinary('4D2')}`)
console.log(`10011010010 = ${binaryToHex('10011010010')}`)
