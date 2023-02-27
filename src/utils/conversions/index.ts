import { hexDecimalMap, hexBinaryMap } from './hexMap'
import { testString } from './validations'

export const binaryToDecimal = (binary: string): number | undefined => {
  if (testString('binary', binary)) {
    let digits = binary.split('').reverse()

    let decimal = 0
    for (let i = 0; i < digits.length; i++) {
      decimal += parseInt(digits[i]) * Math.pow(2, i)
    }

    return decimal
  }
}

export const decimalToBinary = (decimal: number): string => {
  let binary = ''
  while (decimal > 0) {
    binary = (decimal % 2) + binary
    decimal = Math.floor(decimal / 2)
  }

  return binary
}

export const hexToDecimal = (hex: string): number | undefined => {
  if (testString('hex', hex.toUpperCase())) {
    let digits = hex.toUpperCase().split('').reverse()
    let decimal = 0
    for (let i = 0; i < digits.length; i++) {
      decimal += hexDecimalMap[digits[i]] * Math.pow(16, i)
    }

    return decimal
  }
}

export const decimalToHex = (decimal: number): string => {
  let hex = ''
  while (decimal > 0) {
    hex =
      Object.keys(hexDecimalMap).find(
        (key) => hexDecimalMap[key] === decimal % 16
      ) + hex
    decimal = Math.floor(decimal / 16)
  }

  return hex
}

export const hexToBinary = (hex: string): string | undefined => {
  if (testString('hex', hex.toUpperCase())) {
    let digits = hex.toUpperCase().split('')

    let binary = ''
    for (let i = 0; i < digits.length; i++) {
      binary += hexBinaryMap[digits[i]]
    }
    return binary
  }
}

export const binaryToHex = (binary: string): string | undefined => {
  if (testString('binary', binary)) {
    while (binary.length % 4 !== 0) {
      binary = '0' + binary
    }

    let hex = ''
    for (let i = 0; i < binary.length; i += 4) {
      hex += Object.keys(hexBinaryMap).find(
        (key) => hexBinaryMap[key] === binary.slice(i, i + 4)
      )
    }

    return hex
  }
}
