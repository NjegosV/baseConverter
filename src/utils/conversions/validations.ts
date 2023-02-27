const hexRegex = /^[0-9A-Fa-f]+$/
const binaryRegex = /^[01]+$/

export const testString = (type: 'hex' | 'binary', value: string): boolean => {
  if (type === 'hex' && hexRegex.test(value)) return true
  if (type === 'binary' && binaryRegex.test(value)) return true
  return false
}
